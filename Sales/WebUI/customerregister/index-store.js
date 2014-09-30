
var Data_RentType = [
        { "id": "0", "text": "写字楼", "children":
        [
            { "id": "0_软件类", "text": "软件类" }, { "id": "0_电信服务", "text": "电信服务" }, { "id": "0_电子商务", "text": "电子商务" },
            { "id": "0_通讯", "text": "通讯" }, { "id": "0_金融", "text": "金融" }, { "id": "0_高新科技", "text": "高新科技" },
            { "id": "0_私人贸易", "text": "私人贸易" }, { "id": "0_医疗、医药", "text": "医疗、医药" }, { "id": "0_法律、会计", "text": "法律、会计" },
            { "id": "0_教育业", "text": "教育业" }, { "id": "0_顾问咨询", "text": "顾问咨询" }, { "id": "0_中介、培训", "text": "中介、培训" },
            { "id": "0_其它", "text": "其它" }
        ]
        },
         { "id": "1", "text": "商铺", "children":
        [
            { "id": "1_软件类", "text": "软件类" }, { "id": "1_电信服务", "text": "电信服务" }, { "id": "1_电子商务", "text": "电子商务" },
            { "id": "1_通讯", "text": "通讯" }, { "id": "1_金融", "text": "金融" }, { "id": "1_高新科技", "text": "高新科技" },
            { "id": "1_私人贸易", "text": "私人贸易" }, { "id": "1_医疗、医药", "text": "医疗、医药" }, { "id": "1_法律、会计", "text": "法律、会计" },
            { "id": "1_教育业", "text": "教育业" }, { "id": "1_顾问咨询", "text": "顾问咨询" }, { "id": "1_中介、培训", "text": "中介、培训" },
            { "id": "1_其它", "text": "其它" }
        ]
         }
        ];

var Data_DemandArea = [
        { "Key": "90-120", "Value": "90-120" }, { "Key": "120-300", "Value": "120-300" }, { "Key": "300-600", "Value": "300-600" },
        { "Key": "600-1000", "Value": "600-1000" }, { "Key": "1000-1800", "Value": "1000-1800" }, { "Key": "其他", "Value": "其他" }
        ];

var Data_FindWay = [
        { "Key": "短信", "Value": "短信" }, { "Key": "户外广告", "Value": "户外广告" }, { "Key": "亲友介绍", "Value": "亲友介绍" },
        { "Key": "报纸", "Value": "报纸" }, { "Key": "网络", "Value": "网络" }, { "Key": "派单", "Value": "派单" },
        { "Key": "其它", "Value": "其它" }
        ];

var Data_RentCause = [
        { "Key": "租金", "Value": "租金" }, { "Key": "交通", "Value": "交通" }, { "Key": "软件园区氛围", "Value": "软件园区氛围" },
        { "Key": "税务优惠政策", "Value": "税务优惠政策" }, { "Key": "周边配套", "Value": "周边配套" }, { "Key": "户型面积", "Value": "户型面积" },
         { "Key": "地理位置", "Value": "地理位置" }, { "Key": "开发商品牌", "Value": "开发商品牌" }, { "Key": "其他", "Value": "其他" }
        ];

var Data_AgeGroup = [
        { "Key": "20-30", "Value": "20-30" }, { "Key": "31-40", "Value": "31-40" }, { "Key": "41-55", "Value": "41-55" },
        { "Key": "55以上", "Value": "55以上" }
        ];

var Data_LivingCity = [
        { "Key": "白云", "Value": "白云" }, { "Key": "越秀", "Value": "越秀" }, { "Key": "荔湾", "Value": "荔湾" },
        { "Key": "天河", "Value": "天河" }, { "Key": "海珠", "Value": "海珠" }, { "Key": "花都", "Value": "花都" },
        { "Key": "其它", "Value": "其它" }
        ];

var Data_RegisterType = [
        { "Key": "来访", "Value": "来访" }, { "Key": "来电", "Value": "来电" }, { "Key": "来函", "Value": "来函" },
        { "Key": "电邮", "Value": "电邮" }, { "Key": "微信", "Value": "微信" }, { "Key": "QQ", "Value": "QQ" }
        ];

var Data_QueryFields = [{ field: "Guid", title: "内部码", type: "string" },
        { field: "Code", title: "序号", type: "string" },
        { field: "CustomerName", title: "客户姓名", type: "string" },
        { field: "RegisterDate", title: "注册日期", type: "datebox" },
        { field: "MobileTel", title: "移动电话", type: "string" },
        { field: "RentType", title: "租赁用途", type: "combotree", data: Data_RentType },
        { field: "DemandArea", title: "需求面积", type: "combobox", data:Data_DemandArea },
        { field: "FindWay", title: "客户获知途径", type: "combobox", data: Data_FindWay },
        { field: "RentCause", title: "选择项目原因", type: "combobox", data: Data_RentCause },
        { field: "AgeGroup", title: "客户年龄段", type: "combobox", data: Data_AgeGroup },
        { field: "LivingCity", title: "居住区域", type: "combobox", data: Data_LivingCity },
        { field: "LeftCost", title: "期望租金_最少", type: "numberbox" },
        { field: "RightCost", title: "期望租金_最多", type: "numberbox" },
        { field: "RegisterType", title: "来访方式", type: "combobox", data: Data_RegisterType },
        { field: "Describe", title: "描述", type: "string" },
        { field: "RecordTime", title: "记录日期", type: "datetimebox" },
        { field: "Recorder", title: "记录人", type: "string" },
        { field: "Question", title: "问题", type: "string" },
        { field: "Answer", title: "答复", type: "string" }
        ];

        var Data_MenuFields= [{ field: "Guid", title: "内部码", type: "string" },
        { field: "Code", title: "序号", type: "string" },
        { field: "CustomerName", title: "客户姓名", type: "string" },
        { field: "RegisterDate", title: "注册日期", type: "datebox" },
        { field: "MobileTel", title: "移动电话", type: "string" },
        { field: "RentType", title: "租赁用途", type: "combotree", data: Data_RentType },
        { field: "DemandArea", title: "需求面积", type: "combobox", data:Data_DemandArea },
        { field: "FindWay", title: "客户获知途径", type: "combobox", data: Data_FindWay },
        { field: "RentCause", title: "选择项目原因", type: "combobox", data: Data_RentCause },
        { field: "AgeGroup", title: "客户年龄段", type: "combobox", data: Data_AgeGroup },
        { field: "LivingCity", title: "居住区域", type: "combobox", data: Data_LivingCity },
        { field: "LeftCost", title: "期望租金_最少", type: "numberbox" },
        { field: "RightCost", title: "期望租金_最多", type: "numberbox" },
        { field: "RegisterType", title: "来访方式", type: "combobox", data: Data_RegisterType },
        { field: "Describe", title: "描述", type: "string" },
        { field: "RecordTime", title: "记录日期", type: "datetimebox" },
        { field: "Recorder", title: "记录人", type: "string" },
        { field: "Question", title: "问题", type: "string" },
        { field: "Answer", title: "答复", type: "string" }
        ];
