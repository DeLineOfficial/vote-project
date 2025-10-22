import { defineStore } from 'pinia'



export const useGradePostStore = defineStore('grade', () => {
    
    interface gradePost {
        id: number,
        action: string
    }


    const gradesPosts = ref<gradePost[]>([]);
    
    async function likePost(id: Number) {
        if(gradesPosts.value.find(g => g.id == id)) {
            return 
        } else {
            gradesPosts.value.push({
                id: Number(id),
                action: 'liked'
            })
        }
    }
    async function dislikePost(id: Number) {
        if(gradesPosts.value.find(g => g.id == id)) {
            return 
        } else {
            gradesPosts.value.push({
                id: Number(id),
                action: 'disliked'
            })
        }
    }

    function isGrade(id: number) {
        if(gradesPosts.value.find(g => g.id == id)) {
            const currentPost = gradesPosts.value.filter(el => el.id == id);
            return { id: currentPost[0]?.id, action: currentPost[0]?.action, graded: true}
        } else {
            return false
        }
    } 

    return { isGrade, dislikePost, likePost, gradesPosts }
})