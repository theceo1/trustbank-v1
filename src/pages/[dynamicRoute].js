import build from "next/dist/build";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('@/components/DynamicComponent'), 
{ ssr: false,    
 });

 const DynamicPage = () => {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}

export default DynamicPage;

