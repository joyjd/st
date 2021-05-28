import React, { useCallback, useEffect, useState, createRef } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
const OptionListAns = ({ examDetails, qtnIndex, getFinalSelection }) => {
    const idealAns = {
        ans0: false,
        ans1: false,
        ans2: false,
        ans3: false,
    };
    const [answer, setAnswer] = useState({
        ans0: false,
        ans1: false,
        ans2: false,
        ans3: false,
    });

    const handleChangeAnser = (event, index) => {
        setAnswer({ ...idealAns, [event.target.name]: event.target.checked });
        getFinalSelection(index);
    };
    return (
        <List style={{ padding: 0 }}>
            {examDetails.questionList[qtnIndex]['options'].map((op, index) => {
                return (
                    <ListItem key={index} style={{ padding: 0 }}>
                        <Checkbox
                            name={'ans' + index}
                            checked={answer['ans' + index]}
                            onChange={(e) => handleChangeAnser(e, index)}
                            color="primary"
                            inputProps={{
                                'aria-label': 'secondary checkbox',
                            }}
                        />
                        {op}
                    </ListItem>
                );
            })}
        </List>
    );
};

export default React.memo(OptionListAns);
