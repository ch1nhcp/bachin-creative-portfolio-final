function StyledBtn({ children, onClick }) {
  return (
    <button
      className="px-12 py-2 bg-white uppercase hover:underline font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default StyledBtn;
