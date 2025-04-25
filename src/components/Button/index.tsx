type Props = {
  toggleDarkMode: () => void;
}

export default function Button( { toggleDarkMode }: Props ) {
  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={toggleDarkMode}
    >
      Button
    </button>
  );
}