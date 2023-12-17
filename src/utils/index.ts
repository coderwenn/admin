/**
 * 时间格式转换
 * @param timestamp 需要转换的时间
 * @param isS 时候显示时间段
*/
export function formattedDate(timestamp: string, isS = true): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();  
    const month = (date.getMonth() + 1).toString().padStart(2, '0');  
    const day = date.getDate().toString().padStart(2, '0'); 
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    const formattedDate = isS ? `${year}-${month}-${day} ${hour}:${minute}:${second}` : `${year}-${month}-${day}`;
    return formattedDate
  }
 