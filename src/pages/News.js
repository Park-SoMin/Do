import React, { useState } from "react";
import axios from "axios";
import "./News.css";

const News = () => {
  // API를 넘겨받을 state 선언
  const [data, setData] = useState(null);

  const onClick = async () => {
    // axios 라이브러리로 apic call
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      // 응답 data state 저장
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button className="NE_but" onClick={() => onClick()}>
          불러오기
        </button>
      </div>
      {/* JSON 문자열 뿌릴 영역 */}
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default News;
