function StyledBtn({ children }) {
  return (
    <button className="px-12 py-2 bg-white uppercase hover:underline font-medium">
      {children}
    </button>
  );
}

export default StyledBtn;
