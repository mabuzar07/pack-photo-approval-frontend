import { Button, Table } from "antd";
import "./styles.css";
import { useState } from "react";
import DownIcon from "../../assets/svg/DownIcon";

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
                <span className=" w-[24] h-[10] font-bold text-[10px] leading-[100%] tracking-[0%] gap-2.5 rounded p-[3px] bg-[#707EFA] text-[white]">
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
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          expandIcon: ({ expanded, onExpand, record }) => (
            <Button
              type="primary"
              shape="circle"
              size="small"
              onClick={(e) => onExpand(record, e)}
              icon={
                <button
                  className="flex items-center"
                  style={{
                    border: "1px solid #000000",
                    borderRadius: "100px",
                    padding: "10px 16px",
                  }}
                >
                  <span className="font-bold">View</span>
                  <span className="ml-[8px!important] mt-[3px!important]">
                    {expanded ? <DownIcon /> : <>Icon</>}
                  </span>
                </button>
              }
            />
          ),
        }}
      />
    </>
  );
};
export default PrimaryTable;
