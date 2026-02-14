import {toFormValidator, toTypedSchema} from '@vee-validate/zod';
import * as zod from 'zod';

export const enrollStudentSchema = toFormValidator(
	zod.object({
		department: zod.string().nonempty('Department is a required field'),
		academicSession: zod.string().nonempty('Academic Session is required'),
		registerNo: zod.string().nonempty('Register Number is a required field'),
		rollNo: zod.string().nonempty('Roll Number is a required field'),
		enrollDate: zod.string().nonempty("Enroll Date is required"),
		branch: zod.string().nonempty('Branch is required'),
		class: zod.string().nonempty('Class is required'),
		selection: zod.string().nonempty('Selection is required'),
		firstname: zod.string().nonempty('First name is required'),
		lastname: zod.string().nonempty('Last name is required'),
		guardiance: zod.string().nonempty('guardiance is required')
	})
);

export const newSubjectSchema = toFormValidator(
	zod.object({
		branch: zod.string().nonempty('Branch is required'),
		subjectName: zod.string().nonempty('Subject name is required'),
		subjectCode: zod.string().nonempty('Subject code is required'),
		subjectType: zod.string().nonempty('Subject type is required'),
		teacher: zod.string().nonempty('Teacher is required'),
	})
)

export const assignSubjectSchema = toFormValidator(
	zod.object({
		branch: zod.string().nonempty('Branch is required'),
		class: zod.string().nonempty('Class is required'),
		section: zod.string().nonempty('Section is required'),
		subject: zod.string().nonempty('Subject is required'),
	})
)

export const multipleEnrollSchema = toTypedSchema(
	zod.object({
		session: zod.string().nonempty('session is required'),
		branch: zod.string().nonempty('branch is required'),
		dept: zod.string().nonempty('dept is required'),
		class: zod.string().nonempty('class is required'),
		section: zod.string().nonempty('section is required'),
		csvfile: zod.string().nonempty('File is required')
	})
)
export const promotionSchema = toTypedSchema(
	zod.object({
		branch: zod.string().nonempty('session is required'),
		classs: zod.string().nonempty('branch is required'),
		section: zod.string().nonempty('dept is required'),
		passmarks: zod.string().nonempty('class is required'),
	})
)

export const guardianSchema = toTypedSchema(
	zod.object({
		firstname: zod.string().nonempty('firstname is required'),
		lastname: zod.string().nonempty('lastname is required'),
		relationship: zod.string().nonempty('relationship is required'),
		occupation: zod.string().nonempty('occupation is require'),
		phone: zod.string().nonempty('phone is require'),
		email: zod.string().nonempty('email is require')
	})
)

export const employeeEditSchema = toTypedSchema(
	zod.object({
		firstname: zod.string().nonempty('firstname is required'),
		lastname: zod.string().nonempty('lastname is required'),
	})
)
