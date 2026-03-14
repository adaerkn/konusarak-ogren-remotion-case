import React from 'react';
import { AbsoluteFill, staticFile, Img, useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const Scene4Conversation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const listItems = [
    "ABD’li Uzman Eğitmenler",
    "37.500+ Öğrencinin Tercihi",
    "KOSGEB Destekli Eğitim",
    "Türkiye’de İlk ve Tek Mentör Destekli Sistem",
    "Yapay Zeka Destekli Analizler",
    "Profesyonel Kişiselleştirilmiş Müfredat"
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: '#f3f3f3', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginTop: '50px' }}>
        <div style={{ backgroundColor: 'white', padding: '15px 50px', borderRadius: '100px', border: '3px solid #3A85FF', marginBottom: '30px', textAlign: 'center' }}>
          <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#3A85FF' }}>Mülakat Pratiği Kesiti</span>
        </div>
        {/* DEV TELEFON */}
        <Img src={staticFile("sarah_call_screen.png")} style={{ height: '700px', borderRadius: '50px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
      </div>

      <div style={{ padding: '0 40px', display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px', width: '100%' }}>
        {listItems.map((text, i) => {
          const s = spring({ frame: frame - (i * 12), fps, config: { damping: 12 } });
          return (
            <div key={i} style={{ opacity: s, transform: `scale(${s})`, backgroundColor: 'white', padding: '22px 35px', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '32px' }}>✅</span>
              <span style={{ fontSize: '28px', fontWeight: '800', color: '#111' }}>{text}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};