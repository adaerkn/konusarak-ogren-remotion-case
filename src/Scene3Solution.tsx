import React from 'react';
import { AbsoluteFill, Img, staticFile, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene3Solution: React.FC<{ statsData: any }> = ({ statsData }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const move = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: '#FFFFFF', padding: '40px' }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
         <h1 style={{ fontSize: '60px', fontWeight: '900', color: '#111', lineHeight: '1.2' }}>
           Staj mülakatına <br/>
           <span style={{ color: '#3A85FF' }}>Sarah ile hazırlan.</span>
         </h1>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '40px', alignItems: 'center' }}>
            <p style={{ fontSize: '28px', color: '#444', fontWeight: 'bold', margin: 0 }}>• ABD'li Uzman Eğitmenler</p>
            <p style={{ fontSize: '30px', color: '#3A85FF', fontWeight: '900', margin: 0 }}>• İnternet Gerektirmez: Telefonla Görüş!</p>
            <p style={{ fontSize: '28px', color: '#444', fontWeight: 'bold', margin: 0 }}>• Birebir Mentör Desteği</p>
         </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '10%',
        width: '80%',
        transform: `translateY(${1200 - move * 1250}px)`
      }}>
        <Img src={staticFile("gorusme_ekrani.png")} style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.1))' }} />
      </div>
    </AbsoluteFill>
  );
};