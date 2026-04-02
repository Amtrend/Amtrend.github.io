function Prompt({ user }) {
  const [name, host] = user.split('@');
  return (
    <span className="flex items-center flex-wrap">
      <span className="font-bold mr-0.5" style={{ color: 'var(--accent-1)' }}>{name}</span>
      <span style={{ color: 'var(--text-secondary)' }}>@</span>
      <span style={{ color: 'var(--accent-2)' }}>{host}</span>
      <span className="text-white mr-2">:~$</span>
    </span>
  );
};

export default Prompt;