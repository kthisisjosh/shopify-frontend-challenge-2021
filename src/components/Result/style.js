import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
        marginTop: '5px',
    },
    resultButtonContainer: { marginRight: '10px' },
    button: { backgroundColor: '#008060', color: '#FFFFFF' },
    icon: { width: 15, height: 15 },
    titleText: { cursor: 'pointer' },
}));
