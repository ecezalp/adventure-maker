const baseStyle = theme => ({
  backgroundColor: theme.backgroundColor,
  minHeight: '600px',
  minWidth: '400px',
  height: '100vh',
  width: '30vw',
  zIndex: -1,
});

export const getStyle = (theme, depth) =>
  depth < 1
    ? {
      ...baseStyle(theme),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }
    : {
      ...baseStyle(theme),
      // display: 'grid',
      gridTemplateRows: `repeat(${depth + 1}, 1fr)`
    };

export const depthStyle = maxDepth => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: maxDepth == 0 ? 'column' : 'row',
});

export const emptyStyle = {
  color: 'gray',
  fontSize: '1rem',
};