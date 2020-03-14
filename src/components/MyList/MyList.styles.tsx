import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    padding: '10px 50px',
    display: 'grid',
    gridRowGap: '20px',
    gridColumnGap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, 224px)',
    justifyContent: 'center'
  }
});
