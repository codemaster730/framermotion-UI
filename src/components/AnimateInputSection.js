import React, { Fragment, useEffect, useState } from 'react';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';

const useStyles = makeStyles(theme => ({
    selectedItem: {
      maxWidth: 800,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2),
      boxShadow: '0 3px 5px 2px rgba(0, 105, 200, .3)'
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      color: theme.palette.openTitle,
      backgroundColor: theme.palette.primary.contrastText,
    },
    inputField: {
      padding: 'auto',
      textAlign: 'center',
      backgroundColor: theme.palette.primary.dark
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    },
    showItem: {
      height: 50
    }
  }))
const AnimateInputSection = (props) =>{
    const [selectedId, setSelectedId] = useState(null);
    const [selectedItem, setItem] = useState(null);
    useEffect(()=> {
        setItem(_.find(props.showItems, {label: selectedId}));
    });
    return (
        <Fragment>
            <Grid container spacing={8} justify="center" alignItems="center">
                <AnimateSharedLayout type="crossfade">
                    { props.showItems.map(item => (
                        <Grid item xs={12} sm={4} key={item.label}>
                            <motion.div key={item.label} layoutId={item.label} onClick={() => setSelectedId(item.label)}>
                                <label>{item.label}</label>
                                <input type={item.type} disabled={selectedId!==item.label}/>
                            </motion.div>
                        </Grid>
                    ))}
                    <AnimatePresence>
                        {selectedItem && (
                            <motion.div layoutId={selectedId}>
                                <label>{selectedItem.label}</label>
                                <input type={selectedItem.type} disabled={selectedId!==selectedItem.label}/>
                                <motion.button onClick={()=>setSelectedId(null)}/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </AnimateSharedLayout>
            </Grid>
        </Fragment>
        
    );
}
export default AnimateInputSection;