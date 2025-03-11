import { Table } from "antd";
import "./styles.css";
import { useState } from "react";
import DownIcon from "../../assets/svg/DownIcon";
import ExpandableComp from "../ExpandableComp";
import UpIcon from "../../assets/svg/UpIcon";
import PendingIcon from "../../assets/svg/PendingIcon";
import ApprovedIcon from "../../assets/svg/ApprovedIcon";
import RejectedIcon from "../../assets/svg/RejectedIcon";
import moment from "moment";

const PrimaryTable = ({ data, loading, isSearching, searchData }) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const columns = [
    {
      title: "Order Number",
      key: "orderNumber",
      render: (_, record) => {
        return (
          <div className="flex">
            <img
              src={`${record?.packedImage}`}
              className="rounded"
              width="48px"
              height="48px"
            />

            <div className="flex flex-col ml-[12px!important] justify-between">
              <div className="font-normal text-base min-h-[24px]">
                {record?.shippingAddress?.name}
              </div>
              <div className="flex">
                <span className="mr-[8px!important] font-medium text-base leading-[100%] tracking-[-2%] underline decoration-solid decoration-[0%] text-[#ff4641] cursor-pointer">
                  {record?.trackingNumber}
                </span>
                {record?.firstOrder && (
                  <span className="font-bold text-[10px] leading-[100%] tracking-[0%] gap-2.5 rounded p-[3px] bg-[#707EFA] text-[white]">
                    New
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
      className: "font-normal text-base leading-[100%] tracking-[-2%]",
      render: (_, record) => {
        return (
          <span>{moment.unix(record?.orderDate).format("MMM DD, YYYY")}</span>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
      render: (_, record) => {
        return (
          <div>
            <button
              className="flex justify-between items-center px-[10px!important] py-[8px!important] rounded-[100px]"
              style={{
                background:
                  record?.status === "Pending"
                    ? "#FD7004"
                    : record?.status === "Approved"
                    ? "#FF4641"
                    : "#A1A1A1",
              }}
            >
              <span className="mr-[6px!important]">
                {record?.status === "Pending" && <PendingIcon />}
                {record?.status === "Approved" && <ApprovedIcon />}
                {record?.status === "Rejected" && <RejectedIcon />}
              </span>
              <span className="font-semibold text-sm leading-[100%] tracking-[-2%] text-[#ffffff] capitalize">
                {record.orderStatus}
              </span>
            </button>
          </div>
        );
      },
    },
    {
      title: "Total Order",
      // dataIndex: "totalOrder",
      key: "totalOrder",
      className: "font-normal text-base leading-[100%] tracking-[-2%]",
      render: (_, record) => {
        return <span>{record?.lineItems?.length}</span>;
      },
    },
    {
      title: "Total Amount",
      key: "totalAmount",
      render: (_, record) => {
        return (
          <span className="font-bold text-base leading-[100%] tracking-[-2%]">
            ${record?.total?.toFixed(2)}
          </span>
        );
      },
    },
    {
      render:(_,record)=>{
        return(
          <button
              className="flex items-center"
              style={{
                border: "1px solid #000000",
                borderRadius: "100px",
                padding: "8px 13px",
              }}
            >
              <span className="font-bold">View</span>
              <span className="ml-[8px!important] mt-[2px!important]">
                {expandedRowKeys==record?.trackingNumber ? <DownIcon /> : <UpIcon />}
              </span>
            </button>
        )
      }
    }
    // Table.EXPAND_COLUMN,
  ];

  return (
    <>
      <Table
        dataSource={isSearching ? searchData : data}
        columns={columns}
        loading={loading}
        rowKey="trackingNumber"
        rowClassName={(record) => {
          return expandedRowKeys.includes(record.trackingNumber)
            ? "table-row-custom expanded-row cursor-pointer"
            : "table-row-custom cursor-pointer";
        }}
        className="custom-table"
        // tableLayout="fixed"
        bordered={false}
        expandable={{
          expandedRowKeys,
          onExpand: (expanded, record) => {
            setExpandedRowKeys(expanded ? [record.trackingNumber] : []);
          },
          expandedRowRender: (record) => <ExpandableComp record={record} />,
          expandIcon: ({ expanded, onExpand, record }) => (
            <></>
          ),
        }}
        onRow={(record) => ({
          onClick: () => {
            setExpandedRowKeys((prevKeys) =>
              prevKeys.includes(record.trackingNumber)
                ? []
                : [record.trackingNumber]
            );
          },
        })}
        footer={null}
        pagination={false}
      />
    </>
  );
};

export default PrimaryTable;
