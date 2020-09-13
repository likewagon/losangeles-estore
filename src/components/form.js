import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpIcon from '@material-ui/icons/Help';
import CloseIcon from '@material-ui/icons/Close';

import { Colors } from '../constants';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Form(props) {
  const classes = useStyles();

  const [openSuccessSnack, setOpenSuccessSnack] = React.useState(null);
  const handleCloseSuccessSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessSnack(false);
  };
  const [openFailSnack, setOpenFailSnack] = React.useState(null);
  const handleCloseFailSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFailSnack(false);
  };

  return (
    <Grid item xs={10} sm={7} md={7} lg={7}>
      <Box className={classes.body}>
        <Box className={classes.titleLine}>
          <Box className={classes.title}>Windows Virtual Machine</Box>
          <CloseIcon className={classes.closeIcon} onClick={()=>props.handleCloseModal()} />
        </Box>

        <Snackbar open={openSuccessSnack} autoHideDuration={6000} onClose={handleCloseSuccessSnack}>
          <Alert onClose={handleCloseSuccessSnack} severity="success">
            Successfully Submitted!
          </Alert>
        </Snackbar>
        <Snackbar open={openFailSnack} autoHideDuration={6000} onClose={handleCloseFailSnack}>
          <Alert onClose={handleCloseFailSnack} severity="error">
            Error Saving Form!
          </Alert>
        </Snackbar>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />} className={classes.exIcon}>
            <Typography className={classes.heading}>Group / Account</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.exPart}>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Account Number</Box>
              <Box className={classes.value}>
                <input type='text' id='accountNo' name='accountNo' placeholder='' className={classes.inputBox} />
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Department</Box>
              <Box className={classes.value}>
                <select id='department' name='department' className={classes.inputBox}>
                  <option value='auditorAcc'>AUDITOR-ACC@hosted.lac.com</option>
                  <option value='canada'>Canada</option>
                  <option value='usa'>USA</option>
                </select>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />} className={classes.exIcon}>
            <Typography className={classes.heading}>Service Tier</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.exPart}>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Zone Type</Box>
              <Box className={classes.value}>
                <select id='zoneType' name='zoneType' className={classes.inputBox}>
                  <option value='dmz'>DMZ</option>
                  <option value='canada'>Canada</option>
                  <option value='usa'>USA</option>
                </select>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Service Level</Box>
              <Box className={classes.value}>
                <select id='serviceLevel' name='serviceLevel' className={classes.inputBox}>
                  <option value='standard'>Standard</option>
                  <option value='canada'>Canada</option>
                  <option value='usa'>USA</option>
                </select>
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>OS Support</Box>
              <Box className={classes.value}>
                <select id='osSupport' name='osSupport' className={classes.inputBox}>
                  <option value='professionalServices'>Professional Services</option>
                  <option value='canada'>Canada</option>
                  <option value='usa'>USA</option>
                </select>
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />} className={classes.exIcon}>
            <Typography className={classes.heading}>VM Specifications</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.exPart}>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>VM Name</Box>
              <Box className={classes.value}>
                <input type='text' id='vmName' name='vmName' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>VM Purpose</Box>
              <Box className={classes.value}>
                <select id='vmPurpose' name='vmPurpose' className={classes.inputBox}>
                  <option value='test'>Test</option>
                  <option value='canada'>Canada</option>
                  <option value='usa'>USA</option>
                </select>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>OS Type</Box>
              <Box className={classes.value}>
                <select id='osType' name='osType' className={classes.inputBox}>
                  <option value='windows2016'>Windows2016</option>
                  <option value='canada'>Canada</option>
                  <option value='usa'>USA</option>
                </select>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>vCPU</Box>
              <Box className={classes.value}>
                <select id='vCPU' name='vCPU' className={classes.inputBox}>
                  <option value=''>---</option>
                  <option value='2'>2</option>
                  <option value='4'>4</option>
                  <option value='8'>8</option>
                  <option value='10'>10</option>
                  <option value='12'>12</option>
                  <option value='14'>14</option>
                  <option value='16'>16</option>
                </select>
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Memory(GB)</Box>
              <Box className={classes.value}>
                <select id='memory' name='memory' className={classes.inputBox}>
                  <option value=''>---</option>
                  <option value='2'>4</option>
                  <option value='4'>8</option>
                  <option value='8'>16</option>
                  <option value='10'>32</option>
                </select>
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>DNS Suffix</Box>
              <Box className={classes.value}>
                <select id='dnsSuffix' name='dnsSuffix' className={classes.inputBox}>
                  <option value='dns'>dns</option>
                  <option value='asd'>asd</option>
                  <option value='add'>add</option>
                  <option value='fs'>fs</option>
                </select>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Data Classfication</Box>
              <Box className={classes.value}>
                <select id='dataClassification' name='dataClassification' className={classes.inputBox}>
                  <option value='hierachy'>hierachy</option>
                  <option value='memoized'>memoized</option>
                  <option value='semiStructure'>semi-structure</option>
                  <option value='fullStructure'>full-structure</option>
                </select>
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Join Domain</Box>
              <Box className={classes.value}>
                <input type='text' id='joinDomain' name='joinDomain' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Disk Replication</Box>
              <Box className={classes.value}>
                <input type='text' id='diskReplication' name='diskReplication' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Initial Hard Disk 01/02 Size</Box>
              <Box className={classes.value}>
                <input type='text' id='initialHardDiskSize' name='initialHardDiskSize' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Patching Window</Box>
              <Box className={classes.value}>
                <select id='patchingWindow' name='patchingWindow' className={classes.inputBox}>
                  <option value='patching'>patching</option>
                  <option value='patched'>patched</option>
                  <option value='notPatched'>not patched</option>
                </select>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Environment</Box>
              <Box className={classes.value}>
                <input type='text' id='environment' name='environment' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />} className={classes.exIcon}>
            <Typography className={classes.heading}>Software</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.exPart}>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Install IIS</Box>
              <Box className={classes.value} style={{ display: 'flex' }}>
                <input type='radio' id='installIISYes' name='installIIS' placeholder='' />
                <label htmlFor='installIISYes' className={classes.radioLabel}>Yes</label>
                <input type='radio' id='installIISNo' name='installIIS' placeholder='' />
                <label htmlFor='installIISNo' className={classes.radioLabel}>No</label>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Install SQL</Box>
              <Box className={classes.value} style={{ display: 'flex' }}>
                <input type='radio' id='installSQLYes' name='installSQL' placeholder='' />
                <label htmlFor='installSQLYes' className={classes.radioLabel}>Yes</label>
                <input type='radio' id='installSQLNo' name='installSQL' placeholder='' />
                <label htmlFor='installSQLNo' className={classes.radioLabel}>No</label>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Database Support</Box>
              <Box className={classes.value}>
                <select id='databaseSupport' name='databaseSupport' className={classes.inputBox}>
                  <option value='none'>None</option>
                  <option value='mysql'>MySQL</option>
                  <option value='oracle'>Oracle</option>
                  <option value='nosql'>NoSQL</option>
                </select>
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>SSL Certificate</Box>
              <Box className={classes.value} style={{ display: 'flex' }}>
                <input type='radio' id='sslCertificateYes' name='sslCertificate' placeholder='' />
                <label htmlFor='sslCertificateYes' className={classes.radioLabel}>Yes</label>
                <input type='radio' id='sslCertificateNo' name='sslCertificate' placeholder='' />
                <label htmlFor='sslCertificateNo' className={classes.radioLabel}>No</label>
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Application</Box>
              <Box className={classes.value}>
                <input type='text' id='application' name='application' placeholder='' className={classes.inputBox} />
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />} className={classes.exIcon}>
            <Typography className={classes.heading}>Terms {'&'} Conditions</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.exPart}>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>&nbsp;</Box>
              <Box className={classes.value} style={{ width: 500, fontSize: '0.7rem' }}>
                <input type='checkbox' id='acceptService' name='acceptService' placeholder='' />
                <label htmlFor='acceptService' >I accept Service Level Agreement <a href='#'>Terms {'&'} Conditions</a></label>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>&nbsp;</Box>
              <Box className={classes.value} style={{ width: 500, widthimportant: true, fontSize: '0.7rem' }}>
                <input type='checkbox' id='understandSQL' name='understandSQL' placeholder='' />
                <label htmlFor='understandSQL' >I understand that Microsoft SQL License costs {'&'} replicated storage charges are automatically added to the monthly rate for any VMs running Microsoft SQL (Standard or Enterprise) as well as SSRS, SSIS or SSAS (pre or post VM deployment)</label>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />} className={classes.exIcon}>
            <Typography className={classes.heading}>Local/Domain Administrative Users</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.exPart}>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Admin User1</Box>
              <Box className={classes.value}>
                <input type='text' id='adminUser1' name='adminUser1' placeholder='' className={classes.inputBox} />
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Admin User2</Box>
              <Box className={classes.value}>
                <input type='text' id='adminUser2' name='adminUser2' placeholder='' className={classes.inputBox} />
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Admin User3</Box>
              <Box className={classes.value}>
                <input type='text' id='adminUser3' name='adminUser3' placeholder='' className={classes.inputBox} />
              </Box>
              <Box className={classes.symbol}><HelpIcon className={classes.symbolIcon} /></Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />} className={classes.exIcon}>
            <Typography className={classes.heading}>Contact Information</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.exPart}>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Primary Name</Box>
              <Box className={classes.value}>
                <input type='text' id='primaryName' name='primaryName' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Primary Email</Box>
              <Box className={classes.value}>
                <input type='text' id='primaryEmail' name='primaryEmail' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Primary Phone</Box>
              <Box className={classes.value}>
                <input type='text' id='primaryPhone' name='primaryPhone' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Secondary Customer Description</Box>
              <Box className={classes.value}>
                <select id='secondaryCustomerDescription' name='secondaryCustomerDescription' className={classes.inputBox}>
                  <option value=''>---</option>
                  <option value='customerSell'>customer sell</option>
                  <option value='customerBuy'>customer buy</option>
                  <option value='customerBoth'>customer both</option>
                </select>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Secondary Customer Name</Box>
              <Box className={classes.value}>
                <input type='text' id='secondaryCustomerName' name='secondaryCustomerName' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Secondary Customer Email</Box>
              <Box className={classes.value}>
                <input type='text' id='secondaryCustomerEmail' name='secondaryCustomerEmail' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}><Box className={classes.required}>*&nbsp;</Box>Secondary Customer Phone</Box>
              <Box className={classes.value}>
                <input type='text' id='secondaryCustomerPhone' name='secondaryCustomerPhone' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Primary Management Name</Box>
              <Box className={classes.value}>
                <input type='text' id='primaryManagementName' name='primaryManagementName' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Primary Management Email</Box>
              <Box className={classes.value}>
                <input type='text' id='primaryManagementEmail' name='primaryManagementEmail' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Primary Management Phone</Box>
              <Box className={classes.value}>
                <input type='text' id='primaryManagementPhone' name='primaryManagementPhone' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Primary Customer Description</Box>
              <Box className={classes.value}>
                <select id='primaryCustomerDescription' name='primaryCustomerDescription' className={classes.inputBox}>
                  <option value=''>---</option>
                  <option value='customerSell'>customer sell</option>
                  <option value='customerBuy'>customer buy</option>
                  <option value='customerBoth'>customer both</option>
                </select>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Primary Customer Name</Box>
              <Box className={classes.value}>
                <input type='text' id='primaryCustomerName' name='primaryCustomerName' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Primary Customer Email</Box>
              <Box className={classes.value}>
                <input type='text' id='primaryCustomerEmail' name='primaryCustomerEmail' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Primary Customer Phone</Box>
              <Box className={classes.value}>
                <input type='text' id='primaryCustomerPhone' name='primaryCustomerPhone' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Third Customer Description</Box>
              <Box className={classes.value}>
                <select id='thirdCustomerDescription' name='thirdCustomerDescription' className={classes.inputBox}>
                  <option value=''>---</option>
                  <option value='customerSell'>customer sell</option>
                  <option value='customerBuy'>customer buy</option>
                  <option value='customerBoth'>customer both</option>
                </select>
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Third Customer Name</Box>
              <Box className={classes.value}>
                <input type='text' id='thirdCustomerName' name='thirdCustomerName' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Third Customer Email</Box>
              <Box className={classes.value}>
                <input type='text' id='thirdCustomerEmail' name='thirdCustomerEmail' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
            <Box className={classes.eachRow}>
              <Box className={classes.key}>Third Customer Phone</Box>
              <Box className={classes.value}>
                <input type='text' id='thirdCustomerPhone' name='thirdCustomerPhone' placeholder='' className={classes.inputBox} />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Box className={classes.bottomRow}>
          <Grid item xs={12} sm={2} md={2} lg={2} className={classes.btnPart}>
            <Button variant='contained' className={classes.submitBtn} onClick={()=>setOpenSuccessSnack(true)}>SUBMIT</Button>
            <Button variant='contained' className={classes.cancelBtn} onClick={()=>props.handleCloseModal()}>CANCEL</Button>
          </Grid>
          <Grid item sm={4} md={4} lg={4}></Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} className={classes.estimatePart}>
            <Box className={classes.eachPart}>
              <Box className={classes.estimateKey}>Estimated One-time Cost:</Box>
              <Box className={classes.estimateValue}>$9.99</Box>
            </Box>
            <Box className={classes.eachPart}>
              <Box className={classes.estimateKey}>Estimated Hourly Cost:</Box>
              <Box className={classes.estimateValue}>$0.7</Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    maxHeight: 600,
    minHeight: 600,
    overflowY: 'auto',
    backgroundColor: Colors.whiteColor,
    // border: '3px solid'
  },
  titleLine: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.2rem',
    margin: theme.spacing(3)
  },
  closeIcon:{
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    cursor: 'pointer'
  },
  accordion: {
    '&.Mui-expanded': {
      margin: 0
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  exIcon: {
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(6),

    '& div.MuiAccordionSummary-expandIcon': {
      position: 'absolute',
      left: 10
    }
  },

  exPart: {
    display: 'block',
    maxWidth: 560,
    marginLeft: theme.spacing(25),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },

  eachRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1.5),
    // border: '1px solid'
  },
  required: {
    color: '#ff0000',
    fontSize: '0.9rem',
  },
  key: {
    width: '40%',
    color: Colors.itemTextColor,
    fontSize: '0.8rem',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
    // border: '1px solid'
  },
  value: {
    width: '55%',
    // border: '1px solid'
  },
  inputBox: {
    width: '100%',
    minHeight: 30,
    fontSize: '0.8rem',
    borderColor: Colors.borderColor
  },
  radioLabel: {
    marginRight: theme.spacing(2)
  },
  symbol: {
    width: '5%',
    color: Colors.itemTextColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid'
  },
  symbolIcon: {
    width: 15,
    height: 15,
    cursor: 'pointer',
  },

  bottomRow: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // border: '1px solid',
  },
  btnPart: {
    display: 'flex',
    justifyContent: 'center'
  },
  submitBtn: {
    backgroundColor: Colors.toneColor,
    color: Colors.whiteColor,
    marginRight: theme.spacing(2)
  },
  cancelBtn: {
    backgroundColor: Colors.whiteColor
  },

  estimatePart: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  eachPart: {
    display: 'flex'
  },
  estimateKey: {
    fontSize: '0.7rem',
    color: Colors.itemTextColor,
    marginRight: theme.spacing(1),
  },
  estimateValue: {
    fontSize: '0.7rem',
    color: Colors.itemTextColor
  },
}));