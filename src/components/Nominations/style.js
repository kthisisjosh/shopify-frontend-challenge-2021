import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
    container: {
        backgroundColor: '#f4f6f8',
        padding: '1rem 2rem',
        minWidth: '300px',
        marginBottom: '2.5vh',
    },
    nominationContainer: { marginBottom: '1vh', width: '100%' },
    nominationButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 5,
    },
    nominationTitleContainer: { marginTop: 2.5 },
}));
