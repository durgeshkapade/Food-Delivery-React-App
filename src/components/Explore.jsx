export default function Explore() {
    const itemStyle = {
      border: '1px solid #ccc',
      padding: '13px',
      borderRadius: '10px',
    };
  
    return (
      <section className='mb-5'>
        <h1 className="text-2xl mt-7 font-bold">Best Restaurants in Bangalore</h1>
        <div className="grid grid-cols-4 gap-x-[30px] gap-y-[20px] p-[10px]">
          <div style={itemStyle}>Best Restaurants in Pune</div>
          <div style={itemStyle}>Best Restaurants in Mumbai</div>
          <div style={itemStyle}>Best Restaurants in Delhi</div>
          <div style={itemStyle}>Best Restaurants in Hyderabad</div>
          <div style={itemStyle}>Best Restaurants in Kolkata</div>
          <div style={itemStyle}>Best Restaurants in Chennai</div>
          <div style={itemStyle}>Best Restaurants in Chandigarh</div>
          <div style={itemStyle}>Best Restaurants in Ahmedabad</div>
          <div style={itemStyle}>Best Restaurants in Jaipur</div>
          <div style={itemStyle}>Best Restaurants in Nagpur</div>
        </div>
  
        <h1 className="text-2xl mt-7 font-bold">Best Cuisines Near Me</h1>
        <div className="grid grid-cols-4 gap-x-[30px] gap-y-[20px] p-[10px]">
          <div style={itemStyle}>Chinese Restaurant Near Me</div>
          <div style={itemStyle}>South Indian Restaurant Near Me</div>
          <div style={itemStyle}>Indian Restaurant Near Me</div>
          <div style={itemStyle}>Kerala Restaurant Near Me</div>
          <div style={itemStyle}>Korean Restaurant Near Me</div>
          <div style={itemStyle}>North Indian Restaurant Near Me</div>
          <div style={itemStyle}>Seafood Restaurant Near Me</div>
          <div style={itemStyle}>Bengali Restaurant Near Me</div>
          <div style={itemStyle}>Punjabi Restaurant Near Me</div>
          <div style={itemStyle}>Italian Restaurant Near Me</div>
          <div style={itemStyle}>Andhra Restaurant Near Me</div>
        </div>
      </section>
    );
  }
  