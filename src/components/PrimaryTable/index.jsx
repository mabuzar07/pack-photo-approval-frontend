import { Button, Table } from "antd";
import "./styles.css";
import { useState } from "react";
import DownIcon from "../../assets/svg/DownIcon";
import ExpandableComp from "../ExpandableComp";
import UpIcon from "../../assets/svg/UpIcon";
import PendingIcon from "../../assets/svg/PendingIcon";
import ApprovedIcon from "../../assets/svg/ApprovedIcon";
import RejectedIcon from "../../assets/svg/RejectedIcon";

const PrimaryTable = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const dataSource = [
    {
      key: 1,
      img: "./order_img.png",
      imgLg: "order_img_lg.png",
      orderNumber: "25689183715",
      name: "Omar Apollo",
      new: true,
      date: "Feb 18, 2025",
      status: "Pending",
      totalOrder: "4 Items",
      totalAmount: 177.0,
    },
    {
      key: 2,
      img: "./order_img.png",
      imgLg: "order_img_lg.png",
      orderNumber: "25689183715",
      name: "Omar Apollo",
      new: true,
      date: "Feb 18, 2025",
      status: "Pending",
      totalOrder: "4 Items",
      totalAmount: 177.0,
    },
    {
      key: 3,
      img: "./order_img.png",
      imgLg: "order_img_lg.png",
      orderNumber: "25689183715",
      name: "Omar Apollo",
      new: false,
      date: "Feb 18, 2025",
      status: "Approved",
      totalOrder: "4 Items",
      totalAmount: 177.0,
    },
    {
      key: 4,
      img: "./order_img.png",
      imgLg: "order_img_lg.png",
      orderNumber: "25689183715",
      name: "Omar Apollo",
      new: false,
      date: "Feb 18, 2025",
      status: "Approved",
      totalOrder: "4 Items",
      totalAmount: 177.0,
    },
    {
      key: 4,
      img: "./order_img.png",
      imgLg: "order_img_lg.png",
      orderNumber: "25689183715",
      name: "Omar Apollo",
      new: false,
      date: "Feb 18, 2025",
      status: "Rejected",
      totalOrder: "4 Items",
      totalAmount: 177.0,
    },
  ];
  const columns = [
    {
      title: "Order Number",
      key: "orderNumber",
      render: (_, record) => {
        return (
          <div className="flex">
            <img src={`${record?.img}`} className="rounded" />
            <div className="flex flex-col ml-[12px!important] justify-between">
              <div className="font-normal text-base">{record?.name}</div>
              <div className="flex">
                <span className="mr-[8px!important] font-medium text-base leading-[100%] tracking-[-2%] underline decoration-solid decoration-[0%] text-[#ff4641] cursor-pointer">
                  {record?.orderNumber}
                </span>
                <span className="font-bold text-[10px] leading-[100%] tracking-[0%] gap-2.5 rounded p-[3px] bg-[#707EFA] text-[white]">
                  New
                </span>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Order Date",
      dataIndex: "date",
      key: "date",
      className: "font-normal text-base leading-[100%] tracking-[-2%]",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        return (
          <div>
            <button
              className="flex justify-between items-center px-[10px!important] py-[8px!important] rounded-[100px]"
              style={{
                background: record?.status === "Pending" ? "#FD7004" :record?.status==='Approved'?"#FF4641":"#A1A1A1",
              }}
            >
              <span className="mr-[6px!important]">
                {record?.status==='Pending'&&<PendingIcon />}
                {record?.status==='Approved'&&<ApprovedIcon/>}
                {record?.status==='Rejected'&&<RejectedIcon/>}
              </span>
              <span className="font-semibold text-sm leading-[100%] tracking-[-2%] text-[#ffffff]">
                {record.status}
              </span>
            </button>
          </div>
        );
      },
    },
    {
      title: "Total Order",
      dataIndex: "totalOrder",
      key: "totalOrder",
      className: "font-normal text-base leading-[100%] tracking-[-2%]",
    },
    {
      title: "Total Amount",
      key: "totalAmount",
      render: (_, record) => {
        return (
          <span className="font-bold text-base leading-[100%] tracking-[-2%]">
            ${record?.totalAmount?.toFixed(2)}
          </span>
        );
      },
    },
    Table.EXPAND_COLUMN,
    // {
    //   title: "",
    //   key: "actions",
    //   render: (_, record) => {
    //     return <button>View</button>;
    //   },
    // },
  ];
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="key"
        expandable={{
          expandedRowKeys,
          onExpand: (expanded, record) => {
            setExpandedRowKeys(expanded ? [record.key] : []);
          },
          expandedRowRender: (record) => <ExpandableComp />,
          expandIcon: ({ expanded, onExpand, record }) => (
            <button
              onClick={(e) => onExpand(record, e)}
              className="flex items-center"
              style={{
                border: "1px solid #000000",
                borderRadius: "100px",
                padding: "10px 16px",
              }}
            >
              <span className="font-bold">View</span>
              <span className="ml-[8px!important] mt-[3px!important]">
                {expanded ? <DownIcon /> : <UpIcon />}
              </span>
            </button>
          ),
        }}
        footer={null}
        pagination={null}
      />
    </>
  );
};
export default PrimaryTable;
