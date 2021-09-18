import React, { Fragment, useState } from 'react';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import logo from '../logo.svg';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {

    },
    screen: {
      width: '100%'
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      backgroundColor: theme.palette.primary.contrastText,
      textAlign: 'left',
      color: theme.palette.primary.light,
    },
    questions: {
      textAlign: 'left',
      backgroundColor: theme.palette.primary.dark,
      width: '100%',
      padding: '20px',
      position: 'relative'
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    },
    logoTitle: {
        display: 'inline-block',    
        marginTop: '0 !important',
        marginBottom: '0 !important',
        marginLeft: '5px'
    },
    contactInfo: {
        color: theme.palette.primary.grey
    },
    logo: {
        width: '60px !important',
    },
    logoSmall: {
        width: '30px !important',
        height: '30px !important'
    },
    inputItem: {
        backgroundColor: theme.palette.primary.contrastText,
        with: '50px !important',
        height: '200 !important',
    },

    termsOfService: {
        color: 'white',
        position: 'absolute',
        right: 10,
    },
    adTitle: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40,
    },
    inputField: {
        
    },
    questionLabel:{
        color: 'white',
        fontSize: '18px',
        fontWeight: '500'
    },
    questionInput: {
        backgroundColor: 'white',
        height: 55,
        marginTop: 5,
        width: '100%',
        border: 'none',
        padding: '10px !important',
        fontSize: '18px',
        fontWeight: '500'
    },
    questionPromptLabel: {
        color: 'white',
        fontSize: '22px',
        fontWeight: '500'
    },
    questionPromptInput: {
        backgroundColor: 'white',
        height: 70,
        width: '100%',
        border: 'none',
        padding: '10px !important',
        fontSize: '22px',
        fontWeight: '500',
        marginTop: 10,
    },
    selectedSection: {
        position: 'absolute',
        margin: 'auto',
        top: 0, left: 0, bottom: 0, right: 0,
        width: '40%',
        height:'100px'
    },
    header: {
        padding: '5px 0px 5px 0px'
    },
    paddingSmall: {
        padding: '5px'
    },
    paddingMedium: {
        padding: '10px'
    },
    paddingLarge: {
        padding: '20px'
    },
    fontLenderValue: {
        fontSize: '30px',
        fontWeight: '700'
    },
    mbLarge: {
        marginBottom: '30px'
    },
    mbMedium: {
        marginBottom: '20px'
    },
    mbSmall: {
        marginBottom: '10px'
    },
    lenderTitle: {
        fontSize: '14px',
        fontWeight: '500',
        color: theme.palette.primary.grey
    },
    btnDefault: {
        backgroundColor: theme.palette.primary.main
    }
}))

const MainPage = () => {
    const classes = useStyles();
    const [selectedId, setSelectedId] = useState(null);
    const items = [
        {label:"Role", type:"select", value:"Frontend Developer", options:['Frontend Developer','Backend Developer']},
        {label:"Earn Amount", type:"text", value:"$15000", placeholder:"$000000"},
        {label:"Sallery", type:"text", value:"$8000", placeholder:"$000000"},
        {label:"Contact", type:"text", value:"live:.cid.bf34bce4d3afbc06", placeholder:"00000"},
        {label:"Skill Set", type:"select", value:"React", options:['React','Vue','Angular', 'Laravel']},
        {label:"Level", type:"select", value:"Senior", options:['Senior','Junior']},
        
    ];
    const [opacity, setOpacity] = useState(1);
    const [showItems, setShowItems] = useState(items);
    const onChange = (e) => {
        let inputItms = showItems;
        inputItms[Number(selectedId)].value=e.target.value;
        setShowItems([...inputItms]);
    }
    const onHandleClick = (e) => {
        if(selectedId && selectedId !== e.target.id){
            setSelectedId(null);
            setOpacity(1);
        }
    }
    const onSelectQuestion = (index) => {
        setSelectedId(String(index));
        setOpacity(0.1);
    }
    return (
        <Container maxWidth="lg">
            <Grid  container direction="column" onClick={onHandleClick} className={clsx(classes.screen)}>
                <Grid id="header" container className={classes.header} justify="center">
                    <Grid item xs={12} sm={12}  className={classes.title} >
                        <Grid container direction="row" alignItems="center" justify="space-between">
                            <Grid style={{display: 'flex', alignItems: 'center'}}>
                                <img src={logo} className={classes.logo}/>
                                <h1 className={classes.logoTitle}>CodeChef7</h1>
                            </Grid>
                            <Grid style={{display: 'flex', alignItems: 'center'}}>
                                <h2 className={clsx(classes.contactInfo, classes.logoTitle)} style={{marginRight: '20px'}}>Skype</h2>
                                <h2 className={clsx(classes.contactInfo, classes.logoTitle)}>live:.cid.bf34bce4d3afbc06</h2>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid id="section-input" container className={classes.questions} direction="column">
                    <Grid item xs={12} sm={12} style={{position: 'relative'}}>
                        <motion.div animate={{opacity: opacity}}>
                            <div className={classes.termsOfService} style={{marginRight: '10px'}}>Terms of Service</div>
                            <div className={classes.adTitle}>CodeChef7</div>
                        </motion.div>
                    </Grid>
                    <Grid item style={{width: '100%', marginTop: '30px'}}>
                        <AnimateSharedLayout type="crossfade" transition={{ duration: .5}}>
                            <Grid container spacing={5}>
                                {showItems.map(({label,options,...input},index) => (
                                    <Grid item sm={12} md={4} key={index} className={classes.inputField}>
                                        <motion.div layoutId={String(index)} onClick={() => onSelectQuestion(index)} animate={{opacity: opacity}}>
                                            <label className={classes.questionLabel}>{label}</label>
                                            {
                                                options ? 
                                                    (<div className="select-wrapper">
                                                        <select  style={{pointerEvents:'none'}} 
                                                                {...input} 
                                                                className={classes.questionInput} 
                                                                onChange={onChange}>
                                                            {options.map(itm=>(
                                                                <option key={itm}>{itm}</option>
                                                            ))}
                                                        </select>
                                                    </div>) :
                                                    (
                                                        <input  style={{pointerEvents:'none'}}  
                                                                className={classes.questionInput} 
                                                                onChange={onChange} 
                                                                {...input}/>
                                                    )
                                            }
                                            
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                            <AnimatePresence>
                                {selectedId && (
                                    <motion.div layoutId={selectedId} className={classes.selectedSection}>
                                        <label className={classes.questionPromptLabel}>{showItems[Number(selectedId)].label}</label>
                                        {
                                            showItems[Number(selectedId)].options ?
                                                (<div className="select-prompt-wrapper">
                                                    <select value={showItems[Number(selectedId)].value} 
                                                            id={selectedId} className={classes.questionPromptInput} 
                                                            onChange={onChange}>
                                                        {showItems[Number(selectedId)].options.map(itm=>(
                                                            <option key={itm}>{itm}</option>
                                                        ))}
                                                    </select>
                                                </div>) :
                                                (
                                                    <input 
                                                        className={classes.questionPromptInput} 
                                                        type="text"
                                                        id={selectedId}
                                                        value={showItems[Number(selectedId)].value}  
                                                        onChange={onChange}/>
                                                )
                                        }
                                        
                                        {/* <motion.button onClick={()=>setSelectedId(null)}>x</motion.button> */}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </AnimateSharedLayout>   
                    </Grid>     
                </Grid>
                
                <Grid id="section-lenders" container direction="row" style={{padding: '20px'}}>
                    <Grid item sm={2}>
                        <div className={clsx(classes.lenderTitle, classes.mbLarge)}>LENDER</div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '40px'}} className={classes.mbMedium}>
                            <img src={logo} className={classes.logoSmall}/>
                            <div className={classes.lenderTitle} style={{marginLeft: '5px'}}>CodeChef7</div>
                        </div>
                        <div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star unchecked"></span>
                        </div>
                    </Grid>
                    <Grid item sm={2}>
                        <div className={clsx(classes.lenderTitle, classes.mbLarge)}>RATE</div>
                        <div className={clsx(classes.fontLenderValue, classes.mbSmall)}>2.375%</div>
                        <div style={{fontWeight: '500'}}>CodeChef7</div>
                    </Grid>
                    <Grid item sm={2}>
                        <div className={clsx(classes.lenderTitle, classes.mbLarge)}>APR</div>
                        <div className={classes.fontLenderValue}>2.466%</div>
                    </Grid>
                    <Grid item sm={2}>
                        <div className={clsx(classes.lenderTitle, classes.mbLarge)}>MO PAYMENT</div>
                        <div className={classes.fontLenderValue}>$948</div>
                    </Grid>
                    <Grid item sm={2}>
                        <div className={clsx(classes.lenderTitle, classes.mbLarge)}>HARD UPFRONT COSTS</div>
                        <div className={classes.fontLenderValue}>$3416</div>
                    </Grid>
                    <Grid item sm={2}>
                        <div className={classes.mbLarge}></div>
                        <button className="next-btn" type="submit"><span>Learn More </span></button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
export default MainPage;