"use client"

const index = () => {
  return (
    <header className="retro-box p-6 mb-8">
        <div className="text-4xl retro-glow mb-2" style={{ 
          fontFamily: "'Press Start 2P', cursive",
          color: '#00ff41',
          textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41'
        }}>게시판</div>
        <div className="text-xl" style={{ 
          color: '#00d9ff',
          textShadow: '0 0 5px #00d9ff'
        }}>여행 경험과 정보를 공유해보세요</div>
    </header>
  )
}

export default index