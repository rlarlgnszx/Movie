import { useRouter } from "next/router";
import Kiru from "../../components/KIRU";
export default  function Detail(){
    const router = useRouter();
    const [title,id] = router.query.params || [];
    
    console.log(router.query.params);
    return (
        <div>
        <Kiru title={title}/>
        <h4>{title}</h4>
        </div>
    );
}
export function getServerSideProps({params:{params}}){
    console.log(params);
    return {
        props:{
            params,
        },
    }
}