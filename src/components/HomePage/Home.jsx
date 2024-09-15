import fieldWorkersImage from '../../imgs/fieldWorkers.webp';

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${fieldWorkersImage})`,
      }}
      >
      <div className="bg-black bg-opacity-60 p-6 rounded-lg text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-white">
          What will you <span className="text-yellow-500">need</span> today?
        </h1>
        <p className="text-sm text-white mt-4 leading-relaxed tracking-wide font-thin">
          We pride ourselves in delivering the freshest vegetables, grown with care and passion. Our commitment is to the land and the people we serve.
        </p>
      </div>
    </div>
  );
}
