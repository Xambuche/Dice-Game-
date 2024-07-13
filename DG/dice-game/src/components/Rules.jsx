import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>1. Chọn 1 số bất kỳ từ 1 tới 6</p>
        <p>2. Ấn vào cục xúc xắc</p>
        <p>
        3. Sau khi nhấp vào xúc xắc nếu số được chọn bằng số xúc xắc, bạn
        sẽ nhận được điểm tương tự như xúc xắc{" "}
        </p>
        <p>4. Nếu chọn sai bạn sẽ bị trừ số điểm mà xúc xắc đã quay được </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
