import { useEffect, useState } from "react";
import FilterAndSerachSection from "../../components/FilterAndSerachSection";
import PrimaryTable from "../../components/PrimaryTable";
import TopSection from "../../components/TopSection";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const Home = () => {
  const [data, setData] = useState([]);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [newest,setNewest]=useState(true)
  const handleSort = (sortOrder) => {
    const sortedData = [...data].sort((a, b) =>
      sortOrder ? b.orderDate - a.orderDate : a.orderDate - b.orderDate
    );
    setData(sortedData);
    setNewest(sortOrder);
  };
  const handleSearching = (e) => {
    if (e?.target?.value) {
      setIsSearching(true);
      let value = e?.target?.value?.toLowerCase();
      console.log('value',value)
      const newData=data.filter((item) => {
        if (
          item?.shippingAddress?.name?.toLowerCase()?.includes(value) ||
          item?.trackingNumber?.toLowerCase()?.includes(value) ||
          item?.orderStatus?.toLowerCase()?.includes(value) ||
          item?.total?.toString()?.includes(value)
        ) {
          return true;
        } else {
          false;
        }
      });
      if(newData?.length>0){
        setSearchData([...newData])
      }else{
        setSearchData([])
      }
    } else {
      setSearchData([])
      setIsSearching(false);
    }
  };
  const getData = async (status) => {
    let url = `${apiUrl}/get-all-data`;
    if (status) {
      url = url + "?status=" + status;
    }
    try {
      const newDate = Date.now();
      setUpdatedAt(newDate);
      setLoading(true);
      const response = await axios.get(url);
      if (response?.status === 200 && response?.data?.data?.length > 0) {
        setData([...response.data.data]);
        console.log(response.data.data);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch (error) {
      setData([]);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TopSection getData={getData} loading={loading} updatedAt={updatedAt} />
      <FilterAndSerachSection
        getData={getData}
        loading={loading}
        data={data}
        handleSearching={handleSearching}
        handleSort={handleSort}
        newest={newest}
      />
      <PrimaryTable data={data} loading={loading} isSearching={isSearching} searchData={searchData} />
    </div>
  );
};
export default Home;
