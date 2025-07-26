export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen items-center justify-center">
      <article className="w-3/4 h-full border-2 border-red-500 flex flex-col justify-center">
        <div className="w-[80%] ml-auto flex flex-col">
          <h1 className="font-bold text-4xl mb-4">사용자 경험을 중심으로 생각하고 행동하는 오상훈 입니다.</h1>
          <a className="link text-lg font-regular" href="https://github.com/OhSSangHoon">
            GitHub. https://github.com/OhSSangHoon
          </a>
          <p className="link text-lg font-regular">
            Email. fiveon555@gmail.com
          </p>
          <p className="link text-lg font-regular">
            Phone. 010-4582-2710
          </p>
        </div>
      </article>
      <article className="w-1/4 h-full border-2 border-red-500 text-center">
        <h1 className="font-bold text-4xl link">SKILL</h1>
        <p>능숙한 정도를 <span className="text-[#ff4c4c]">상</span>/<span className="text-[#fd9f28]">중</span>/<span className="text-[#1187cf]">하</span>로 표현합니다.</p>
        <div className="flex flex-col text-left link">
          <h2 className="font-bold text-2xl">Language</h2>
          <div className="flex items-center mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ff4c4c] mr-2"></span>
            <p className="m-0">JavaScript</p>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-[#fd9f28] mr-2"></span>
            <p className="m-0">TypeScript</p>
          </div>
        </div>
      </article>
    </main>
  );
}