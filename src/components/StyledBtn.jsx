function StyledBtn({ children, onClick }) {
  return (
    <button
      className="px-12 py-2 border-solid border-2 border-cafe uppercase text-cafe font-medium transition-all duration-300 hover:bg-cafe hover:text-white transform"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default StyledBtn;
