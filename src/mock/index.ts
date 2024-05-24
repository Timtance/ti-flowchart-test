export const systemJsonData = [
    {
        "sourceId": "A1", 
        "id": "T4de4400-U7f6-I367-TXH-f04-3044374ec61b", 
        "x": 133, 
        "y": 131, 
        "value": "LOGIN",
        "disabled": false, 
        "className": "ti_fBox_normal", 
        "to": "T44fee1a-U5c4-I686-TXH-93e-cb03c7ff2b08"
    }, 
    { 
        "sourceId": "A1", 
        "id": "T44fee1a-U5c4-I686-TXH-93e-cb03c7ff2b08", 
        "x": 413, 
        "y": 131, 
        "value": "Limit & Menu", 
        "disabled": false, 
        "className": "ti_fBox_normal", 
        "from": "T4de4400-U7f6-I367-TXH-f04-3044374ec61b", 
        "to": "T480b34c-U31e-I2bf-TXH-440-ab27209a5cde,Te485df8-U114-Ie3d-TXH-ff4-d85f0ed0defb", 
        "trigger": "[{\"value\":\"Request\",\"id\":\"T4de4400-U7f6-I367-TXH-f04-3044374ec61b\"}]" 
    }, 
    { 
        "sourceId": "A1", 
        "id": "Te485df8-U114-Ie3d-TXH-ff4-d85f0ed0defb", 
        "x": 414, 
        "y": 389, 
        "value": "Menu & Into Pages", 
        "disabled": false, 
        "className": "ti_fBox_normal", 
        "from": "T44fee1a-U5c4-I686-TXH-93e-cb03c7ff2b08", 
        "trigger": "[{\"value\":\"Resquest\",\"id\":\"T44fee1a-U5c4-I686-TXH-93e-cb03c7ff2b08\"}]" 
    }, 
    { 
        "sourceId": "A1", 
        "id": "T480b34c-U31e-I2bf-TXH-440-ab27209a5cde", 
        "x": 733, 
        "y": 132, 
        "value": "Limit Data", 
        "disabled": false, 
        "className": "ti_fBox_normal", 
        "from": "T44fee1a-U5c4-I686-TXH-93e-cb03c7ff2b08", 
        "trigger": "[{\"value\":\"Request\",\"id\":\"T44fee1a-U5c4-I686-TXH-93e-cb03c7ff2b08\"}]" 
    }
];
export const forInJsonData = [
    {
        "sourceId": "A1",
        "id": "T4de4400-U7f6-I367-TXH-f04-3044374ec61b",
        "x": 133,
        "y": 131,
        "value": "LOGIN",
        "disabled": false,
        "className": "ti_fBox_normal",
        "title": "Caption",
        "list": [
            { "value": "Caption1", "label": 1 },
            { "value": "Caption2", "label": 2 },
        ]
    }
];