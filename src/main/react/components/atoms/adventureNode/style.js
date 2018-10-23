export const getStyle = (zoom, theme, depth) => {
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
      height: `${3.2 * zoom}px`,
      width: `${3.2 * zoom}px`,
      backgroundColor: colors[depth],
      color: depth > 4 ? 'white' : 'black',
      fontFamily: font.family,
      fontSize: `${1.3 * zoom}px`,
    }
  }
  return {
    ...base,
    height: `${1.6 * zoom}px`,
    width: `${1.6 * zoom}px`,
    color: 'white',
    backgroundColor: 'black',
    fontSize: `${1.3 * zoom}px`,
  }
};

export const getBorderStyle = (zoom, isOneWay) => ({
  cursor: 'pointer',
  WebkitClipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  height: isOneWay ? `${1.7 * zoom}px` : `${3.3 * zoom}px`,
  width: isOneWay ? `${1.7 * zoom}px` : `${3.3 * zoom}px`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'lightgray',
  margin: isOneWay ? `${0.5 * zoom}px` : `${1.3 * zoom}px`,
});