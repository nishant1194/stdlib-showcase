// sample data
const mockDownloads = Array.from({ length: 90 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (89 - i));
    return {
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 300),
    };
  });
  
  export default mockDownloads;
