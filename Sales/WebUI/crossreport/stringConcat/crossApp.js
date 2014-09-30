$(function () {

    var data1 =
{
    "CRowTotal": 6,
    "CColTotal": 4,
    "Rows": [
        {
            "CType": "ProjectHead",
            "CRow": "0",
            "CCol": "0",
            "CValue": {
                "projecthead": "项目"
            }
        },
        {
            "CType": "ProjectHead",
            "CRow": "1",
            "CCol": "0",
            "CValue": {
                "projecthead": "项目1"
            }
        },
        {
            "CType": "ProjectHead",
            "CRow": "2",
            "CCol": "0",
            "CValue": {
                "projecthead": "项目2"
            }
        },
        {
            "CType": "ProjectHead",
            "CRow": "3",
            "CCol": "0",
            "CValue": {
                "projecthead": "项目3"
            }
        },
        {
            "CType": "ProjectHead",
            "CRow": "4",
            "CCol": "0",
            "CValue": {
                "projecthead": "项目4"
            }
        },
        {
            "CType": "ProjectHead",
            "CRow": "5",
            "CCol": "0",
            "CValue": {
                "projecthead": "项目5"
            }
        },
        {
            "CType": "NodeHead",
            "CRow": "0",
            "CCol": "1",
            "CValue": {
                "nodehead": "结点1"
            }
        },
        {
            "CType": "NodeHead",
            "CRow": "0",
            "CCol": "2",
            "CValue": {
                "nodehead": "结点2"
            }
        },
        {
            "CType": "NodeHead",
            "CRow": "0",
            "CCol": "3",
            "CValue": {
                "nodehead": "结点3"
            }
        },
        {
            "CType": "NodeFiles",
            "CRow": "1",
            "CCol": "1",
            "CValue": {
                "fileguid": "fileguid_A1",
                "filename": "filename_A1",
                "filetype": "filetype_A1",
                "fileurl": "fileurl_A1",
                "uploadtime": "2013-10-30"
            }
        },
        {
            "CType": "NodeFiles",
            "CRow": "1",
            "CCol": "2",
            "CValue": {
                "fileguid": "fileguid_A2",
                "filename": "filename_A2",
                "filetype": "filetype_A2",
                "fileurl": "fileurl_A2",
                "uploadtime": "2013-10-30"
            }
        },
        {
            "CType": "NodeFiles",
            "CRow": "1",
            "CCol": "3",
            "CValue": {
                "fileguid": "fileguid_A3",
                "filename": "filename_A3",
                "filetype": "filetype_A3",
                "fileurl": "fileurl_A3",
                "uploadtime": "2013-10-30"
            }
        },
        {
            "CType": "NodeFiles",
            "CRow": "1",
            "CCol": "1",
            "CValue": {
                "fileguid": "fileguid_B1",
                "filename": "filename_B1",
                "filetype": "filetype_B1",
                "fileurl": "fileurl_B1",
                "uploadtime": "2013-10-30"
            }
        },
        {
            "CType": "NodeFiles",
            "CRow": "1",
            "CCol": "2",
            "CValue": {
                "fileguid": "fileguid_B2",
                "filename": "filename_B2",
                "filetype": "filetype_B2",
                "fileurl": "fileurl_B2",
                "uploadtime": "2013-10-30"
            }
        },
        {
            "CType": "NodeFiles",
            "CRow": "1",
            "CCol": "3",
            "CValue": {
                "fileguid": "fileguid_B3",
                "filename": "filename_B3",
                "filetype": "filetype_B3",
                "fileurl": "fileurl_B3",
                "uploadtime": "2013-10-30"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "2",
            "CCol": "1",
            "CValue": {
                "lefttime_plan": "2013-01-01",
                "righttime_plan": "2013-01-15",
                "workdays_plan": "9",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "2",
            "CCol": "2",
            "CValue": {
                "lefttime_plan": "2013-02-01",
                "righttime_plan": "2013-02-15",
                "workdays_plan": "5",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "2",
            "CCol": "3",
            "CValue": {
                "lefttime_plan": "2013-03-01",
                "righttime_plan": "2013-02-15",
                "workdays_plan": "13",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "3",
            "CCol": "1",
            "CValue": {
                "lefttime_plan": "2013-01-01",
                "righttime_plan": "2013-01-15",
                "workdays_plan": "10",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "3",
            "CCol": "2",
            "CValue": {
                "lefttime_plan": "2013-02-01",
                "righttime_plan": "2013-02-15",
                "workdays_plan": "23",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "3",
            "CCol": "3",
            "CValue": {
                "lefttime_plan": "2013-03-01",
                "righttime_plan": "2013-02-15",
                "workdays_plan": "45",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "4",
            "CCol": "1",
            "CValue": {
                "lefttime_plan": "2013-01-01",
                "righttime_plan": "2013-01-15",
                "workdays_plan": "77",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "4",
            "CCol": "2",
            "CValue": {
                "lefttime_plan": "2013-02-01",
                "righttime_plan": "2013-02-15",
                "workdays_plan": "88",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "4",
            "CCol": "3",
            "CValue": {
                "lefttime_plan": "2013-03-01",
                "righttime_plan": "2013-02-15",
                "workdays_plan": "99",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "5",
            "CCol": "1",
            "CValue": {
                "lefttime_plan": "2013-01-01",
                "righttime_plan": "2013-01-15",
                "workdays_plan": "55",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "5",
            "CCol": "2",
            "CValue": {
                "lefttime_plan": "2013-02-01",
                "righttime_plan": "2013-02-15",
                "workdays_plan": "77",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": "5",
            "CCol": "3",
            "CValue": {
                "lefttime_plan": "2013-03-01",
                "righttime_plan": "2013-02-15",
                "workdays_plan": "88",
                "alldays_plan": "15"
            }
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": "3",
            "CCol": "1",
            "CValue": {
                "fileguid": "fileguid_P1",
                "filename": "filename_P1",
                "filetype": "filetype_P1",
                "fileurl": "fileurl_P1",
                "uploadtime": "2013-10-30"
            }
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": "4",
            "CCol": "2",
            "CValue": {
                "fileguid": "fileguid_P2",
                "filename": "filename_P2",
                "filetype": "filetype_P2",
                "fileurl": "fileurl_P2",
                "uploadtime": "2013-10-30"
            }
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": "5",
            "CCol": "3",
            "CValue": {
                "fileguid": "fileguid_P3",
                "filename": "filename_P3",
                "filetype": "filetype_P3",
                "fileurl": "fileurl_P3",
                "uploadtime": "2013-10-30"
            }
        }
    ]
};


    var data2 = {
        "CRowTotal": 15,
        "CColTotal": 14,
        "Rows": [
        {
            "CType": "ProjectHead",
            "CRow": 0,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"项目\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 13,
            "CValue": "{\"nodehead\":\"交楼\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 5,
            "CValue": "{\"nodehead\":\"扩初设计\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 7,
            "CValue": "{\"nodehead\":\"景观设计\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 1,
            "CValue": "{\"nodehead\":\"土地拓展\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 6,
            "CValue": "{\"nodehead\":\"施工图设计\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 10,
            "CValue": "{\"nodehead\":\"创意样板房设计\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 12,
            "CValue": "{\"nodehead\":\"营销准备\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 8,
            "CValue": "{\"nodehead\":\"两点一线\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 9,
            "CValue": "{\"nodehead\":\"公共部位及交标精装修\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 3,
            "CValue": "{\"nodehead\":\"规划方案设计\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 2,
            "CValue": "{\"nodehead\":\"项目启动\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 4,
            "CValue": "{\"nodehead\":\"单体方案设计\"}"
        },
        {
            "CType": "NodeHead",
            "CRow": 0,
            "CCol": 11,
            "CValue": "{\"nodehead\":\"施工准备\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 8,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"流花湖项目\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 4,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"大学城\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 10,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"方圆滨江大厦\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 2,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"白云时光(福林项目)\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 3,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"方圆月岛(大坦沙)\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 6,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"荷塘领会\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 12,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"信息港项目\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 13,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"月岛\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 9,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"方圆大厦\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 5,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"小城之春雅居\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 7,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"江湾水恋居\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 14,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"珠海明月山溪\"}"
        },
        {
            "CType": "ProjectHead",
            "CRow": 11,
            "CCol": 0,
            "CValue": "{\"projecthead\":\"番禺云山诗意\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "NodeFiles",
            "CRow": 1,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 8,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 4,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 10,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 2,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 3,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 6,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 12,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 13,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 9,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 5,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 7,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 14,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 13,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 5,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 7,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 1,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 6,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 10,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 12,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 8,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 9,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 3,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 2,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 4,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeValue",
            "CRow": 11,
            "CCol": 11,
            "CValue": "{ \"lefttime_plan\":\"2013-11-05\", \"righttime_plan\":\"2013-11-05\", \"workdays_plan\":\"0.00\", \"alldays_plan\":\"0.00\", \"lefttime_real\":\"2013-11-05\", \"righttime_real\":\"2013-11-05\", \"workdays_real\":\"0.00\", \"alldays_real\":\"0.00\", \"progress_completerate\":\"0.0000\", \"cashflow_left\":\"0.00\", \"cashflow_right\":\"0.00\", \"cashflow\":\"0.00\", \"cost_plan\":\"0.00\", \"cost_real\":\"0.00\" }"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 8,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 4,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 10,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 2,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 3,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 6,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 12,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 13,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 9,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 5,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 7,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 14,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 13,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 5,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 7,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 1,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 6,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 10,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 12,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 8,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 9,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 3,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 2,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 4,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"22B23A0D-4977-4C23-9B9B-64EC555D24B1\", \"filename\":\"规章制度\", \"filetype\":\"A\", \"fileurl\":\"http://www.sina.com\", \"uploadtime\":\"2013-11-04 15:13:04\"}"
        },
        {
            "CType": "ProjectNodeFiles",
            "CRow": 11,
            "CCol": 11,
            "CValue": "{ \"fileguid\":\"AF9A0F7C-003F-42F9-995C-8D2D1BF564B9\", \"filename\":\"操作指引\", \"filetype\":\"B\", \"fileurl\":\"http://www.baidu.com\", \"uploadtime\":\"2013-11-04 15:12:50\"}"
        }
    ]
    };


    CreateCross("cross", true, data2);
    //CreateCross("cross", false, "../api/Cross/GetCross", true);
    //console.log($("body").html());


});   