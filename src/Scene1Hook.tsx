import React from 'react';
import { AbsoluteFill, staticFile, Img, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: '#FFFFFF', padding: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginTop: '160px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '85px', fontWeight: '900', color: '#111', margin: 40 }}>
          Genel Yetenek Testini <span style={{color: '#3A85FF'}}>Devirdin!</span>
        </h1>
        <h2 style={{ fontSize: '65px', fontWeight: '800', color: '#333', marginTop: '20px' }}>
          Peki ya İngilizce Mülakat?
        </h2>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transform: `scale(${s})` }}>
        <Img src={staticFile("student_illu.png")} style={{ height: '720px' }} />
      </div>

      <div style={{ marginBottom: '140px', textAlign: 'center' }}>
        <p style={{ fontSize: '38px', fontWeight: '700', color: '#666' }}>Mülakat provanı şansa bırakma, akıcı konuş.</p>
      </div>

      <div style={{ position: 'absolute', bottom: 30, width: '100%', height: '80px', backgroundColor: '#3A85FF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ color: 'white', fontSize: '32px', fontWeight: 'bold' }}>konusarakogren.com</span>
      </div>
    </AbsoluteFill>
  );
};