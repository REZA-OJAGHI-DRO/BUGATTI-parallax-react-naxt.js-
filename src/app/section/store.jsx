import { create } from 'zustand'

const useStore = create((set) => ({
    sT:'',
    sec1:'',
    oTT:'',
    sec3OTt:'',
    sec2sot:'',
    ss:(st)=>set({sT:st}),
    Sec1:(seC1)=>set({sec1:seC1}),
    oT:(ot)=>set({oTT:ot}),
    sec3OTT:(y)=>set({sec3OTt:y})

}))
export default useStore