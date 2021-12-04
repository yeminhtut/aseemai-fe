const inputStyles = () => ({
    layout: {
        width: 340,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "120px",
    },
    appBar: {
        marginBottom: '32px',
        backgroundColor: '#212121'
    },
    appTitle: {
        color: '#fff',
        textDecoration: 'none'
    },
    mainContent: {
        paddingTop: '96px'
    },
    paper: {
        padding: '32px',
        marginBottom: '48px',
        marginTop: "64px",
    },
    dialogContent: {
        marginTop: '16px',
        borderBottom: '1px solid #BCBCBC'
    },
    loginBtnWrapper: {
        marginTop: "16px",
        display: "flex",
        justifyContent: "flex-end",
    },
    loginBtn: {
        backgroundColor: "#5F56A6",
        color: "white",
        //textTransform: 'none',
        '&:hover': {
            backgroundColor: "#5F56A6",
        }
    },
    actionBtn: {
        //textTransform: 'none',
        width: '250px',
        background: '#5F56A6'
    },
    dialogAction: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px 0px'
    },
    termChecked: {
        paddingLeft: '16px'
    },
    errorLabel: {
        marginLeft: '32px',
        color: '#E22B16',
        marginTop: '-8px'
    },
    loginField: {
        width: '100%',
        marginBottom: '40px'
    }
    
  });

export default inputStyles
