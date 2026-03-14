import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const Scene5Features: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const features = [
    { t: "Online ve Mobil Erişim", d: "İstediğin her yerden bilgisayar veya telefonla katılım.", i: "📱" },
    { t: "Gelişim Takibi & Rapor", d: "Eğitmen geri bildirimleri ile gelişimini izle.", i: "📊" },
    { t: "Zaman Esnekliği", d: "Programına göre 10, 20 veya 30 dakikalık seanslar.", i: "⏰" },
    { t: "Profesyonel Müfredat", d: "Kariyere özel mülakat ve iş hayatı içerikleri.", i: "🛡️" }
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: '#FFFFFF', padding: '140px 60px' }}>
      <h2 style={{ fontSize: '70px', fontWeight: '900', textAlign: 'center', marginBottom: '100px', color: '#111' }}>
        Neden <span style={{ color: '#3A85FF' }}>Konuşarak Öğren?</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {features.map((f, i) => {
          const s = spring({ frame: frame - i * 15, fps, config: { damping: 12 } });
          return (
            <div key={i} style={{ transform: `scale(${s})`, opacity: s, backgroundColor: '#F9FAFB', padding: '45px', borderRadius: '40px', display: 'flex', alignItems: 'center', gap: '40px', border: '2px solid #EEE' }}>
              <span style={{ fontSize: '85px' }}>{f.i}</span>
              <div>
                <h4 style={{ fontSize: '42px', margin: 0, fontWeight: '900', color: '#111' }}>{f.t}</h4>
                <p style={{ fontSize: '28px', margin: '10px 0 0 0', color: '#666', fontWeight: 'bold' }}>{f.d}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};