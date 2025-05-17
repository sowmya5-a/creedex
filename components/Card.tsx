import Image from 'next/image';
export default function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <Image className="w-full h-48 object-cover" src="/images/sample.jpg" alt="Sample" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-gray-700 mb-4">
          A brief description of the card content goes here.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
}
