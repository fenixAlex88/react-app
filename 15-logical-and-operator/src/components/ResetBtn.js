export default function ResetBtn({ onClick }) {
  return (
    <button
      style={{ backgroundColor: 'darkgreen', padding: '20px' }}
      onClick={onClick}
    >
      Reset
    </button>
  );
}
