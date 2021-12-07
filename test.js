const deleteCourseCtrl = async(ctrlData)=>{
    const uni = await getCachedUni(ctrlData.uniUUID)
    if(uni){
        const course = await findModelItemQ('Courses',{
            where:{
                uniId10: uni.uniId10,
            }
        })
        if(course){
            const deleteScholarshipAssociations = await deleteModelItemQ('Scholarships_Universities',{
                where:{
                    uniId: uni.uniId,
                    courseId: course.courseId
                }
            })
            return {moreInfo: [{msg: `Course deleted`}]}
        }else{
            throw new DataNotFoundError()
        }
    }else{
        throw new DataNotFoundError()
    }
}
