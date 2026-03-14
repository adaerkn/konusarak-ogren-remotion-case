import React from 'react';
import { AbsoluteFill, Sequence, staticFile, Audio, Img, interpolate, useCurrentFrame } from 'remotion';
import { Scene1Hook } from './Scene1Hook';
import { Scene2Problem } from './Scene2Problem';
import { Scene3Solution } from './Scene3Solution';
import { Scene4Conversation } from './Scene4Conversation';
import { Scene5Features } from './Scene5Features';
import { Scene7Trust } from './Scene7Trust';
import { Scene6CTA } from './Scene6CTA';

export const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // --- ZAMANLAMA AYARLARI (30 FPS) ---
  const voiceDelay = 30;           // 1 sn sonra ses girer
  const voiceDuration = 13 * 30;   // 13 sn'lik Sarah sesi (390 kare)
  const postVoiceWait = 45;        // Ses bitince 1.5 sn bekleme

  // Scene 4 Toplam Süresi: 465 kare
  const s4Duration = voiceDelay + voiceDuration + postVoiceWait;

  // Yumuşak Geçiş (Soft Fade)
  const s4Opacity = interpolate(
    frame,
    [750, 780],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: '#FFFFFF', fontFamily: 'Helvetica', overflow: 'hidden' }}>

      {/* 1. ARKA PLAN MÜZİĞİ */}
      <Audio src={staticFile("background.mp3")} volume={0.1} loop />

      {/* 2. SABİT ORİJİNAL LOGO (Tüm videoda sol üstte) */}
      <div style={{ position: 'absolute', top: 50, left: 50, zIndex: 100 }}>
        <Img
          src={staticFile("konusarak_ogren_logo.png")}
          style={{ width: '180px' }}
        />
      </div>

      {/* 3. SAHNELER */}

      {/* Scene 1: Hook (0-8sn) */}
      <Sequence durationInFrames={240}>
        <Scene1Hook />
      </Sequence>

      {/* Scene 2: Problem (8-15sn) */}
      <Sequence from={240} durationInFrames={210}>
        <Scene2Problem />
      </Sequence>

      {/* Scene 3: Solution - Arama Ekranı (15-25sn) */}
      <Sequence from={450} durationInFrames={300}>
        <Scene3Solution />
      </Sequence>

      {/* Scene 4: Sarah Pratiği (Ses: forest_speak.mp3) */}
      <Sequence from={750} durationInFrames={s4Duration} style={{ opacity: s4Opacity }}>
        <Sequence from={voiceDelay}>
          <Audio src={staticFile("forest_talk.mp3")} volume={0.5} />
        </Sequence>
        <Scene4Conversation />
      </Sequence>

      {/* Scene 5: Özellikler (Sarah bittikten sonra) */}
      <Sequence from={750 + s4Duration} durationInFrames={210}>
        <Scene5Features />
      </Sequence>

      {/* Scene 7: Güven Veren Ortaklar */}
      <Sequence from={750 + s4Duration + 210} durationInFrames={210}>
        <Scene7Trust />
      </Sequence>

      {/* Scene 6: Final CTA (Mavi Ekran) */}
      <Sequence from={750 + s4Duration + 420} durationInFrames={240}>
        <Scene6CTA />
      </Sequence>

      {/* TEKNİK KÜNYE */}
      <div style={{
        position: 'absolute',
        bottom: 10,
        width: '100%',
        textAlign: 'center',
        fontSize: '18px',
        color: '#94A3B8',
        zIndex: 101,
        fontWeight: 'bold'
      }}>
        built with: Gemini AI | ElevenLabs | Figma AI | Remotion (React)
      </div>

    </AbsoluteFill>
  );
};