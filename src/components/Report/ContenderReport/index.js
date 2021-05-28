import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getContendersBySession } from './../../../firebase/firebaseService';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import { getTitleSm, getTitle, getIcons, getTime } from './../../../helpers';

const ContenderReport = ({ sessionId }) => {
    const [contenderList, setContenderList] = useState({});

    const getCOntenderRawData = async () => {
        const rawData = await getContendersBySession(sessionId);

        const contenderListObj = {};
        if (rawData.length !== 0) {
            rawData.forEach((data) => {
                if (contenderListObj[data.quizID]) {
                    contenderListObj[data.quizID] = [
                        ...contenderListObj[data.quizID],
                        data,
                    ];
                } else {
                    contenderListObj[data.quizID] = [data];
                }
            });
        }
        console.log(contenderListObj);
        setContenderList(contenderListObj);
    };

    useEffect(() => getCOntenderRawData(), []);

    return (
        <Box mb={3}>
            {Object.keys(contenderList).map((dtIndx, index) => {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id={'panel' + index}
                        >
                            <Typography>
                                {contenderList[dtIndx][0]['qzName']}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box width={1}>
                                {getTitleSm('Participant Scores')}
                                <List style={{ padding: 0 }}>
                                    {contenderList[dtIndx].map((qz, index) => {
                                        return (
                                            <ListItem
                                                key={index}
                                                style={{ paddingLeft: 0 }}
                                                divider
                                            >
                                                {qz.userName}
                                                <ListItemSecondaryAction>
                                                    {qz.score} / {qz.total}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Box>
    );
};

export default ContenderReport;
