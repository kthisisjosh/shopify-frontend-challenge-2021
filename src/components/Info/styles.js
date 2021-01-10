import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
    container: {
        backgroundColor: '#f4f6f8',
        overflow: 'auto',
        padding: '1rem 2rem',
    },
    poster: { width: 250 },
    infoContainer: { lineHeight: 0.05 },
    plotContainer: { marginTop: '1vh' },
    plotText: { lineHeight: '1rem' },
}));
