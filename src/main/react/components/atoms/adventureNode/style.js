export const getStyle = (theme, depth) => {
  const base = {
    cursor: 'pointer',
    WebkitClipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  if (theme) {
    let {colors, font} = theme;
    return {
      ...base,
      height: '40px',
      width: '40px',
      backgroundColor: colors[depth],
      color: depth > 4 ? 'white' : 'black',
      fontFamily: font.family,
      fontSize: font.size.medium,
    }
  }
  return {
    ...base,
    height: '20px',
    width: '20px',
    color: 'white',
    backgroundColor: 'black',
    fontSize: '0.8rem',
  }
};

export const getBorderStyle = (isOneWay) => ({
  cursor: 'pointer',
  WebkitClipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  height: isOneWay ? '22px' : '42px',
  width: isOneWay ? '22px' : '42px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'lightgray',
});