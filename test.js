const deleteCourseCtrl = async(ctrlData)=>{
    const uni = await getCachedUni(ctrlData.uniUUID)
    if(uni){
        const course = await findModelItemQ('Courses',{
            where:{
                uniId: uni.uniId,
                courseUUID: ctrlData.courseUUID,
                courseUUID1: ctrlData.courseUUID1,
                courseUUID2: ctrlData.courseUUID2,
                courseUUID3: ctrlData.courseUUID3
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
