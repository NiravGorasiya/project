const deleteCourseCtrl = async(ctrlData)=>{
    const uni = await getCachedUni(ctrlData.uniUUID)
    if(uni){
        const course = await findModelItemQ('Courses',{
            where:{
                uniId: uni.uniId,
                uniId: uni.uniId,
                courseUUID: ctrlData.courseUUID,
                courseUUID: ctrlData.courseUUID,
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
