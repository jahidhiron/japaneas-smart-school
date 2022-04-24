import { createSlice } from "@reduxjs/toolkit";

export const student = createSlice({
  name: "student",
  initialState: {
    isLoading: false,
    student: {},
    recentStudent: [],
    banStudent: [],
    unprofileStudent: [],
    errors: false,
    isSuccess: false,
  },
  reducers: {
    // get students
    getStudentsStart: (state) => {
      state.isLoading = true;
    },
    getStudentsSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.student = action?.payload;
    },
    getStudentsFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action?.payload;
    },

    // get recent teacher
    getRecentStudentsStart: (state) => {
      state.isLoading = true;
    },
    getRecentStudentsSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.recentStudent = action?.payload;
    },
    getRecentStudentsFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action?.payload;
    },

    // get unprofile teacher
    getUnprofileStudentsStart: (state) => {
      state.isLoading = true;
    },
    getUnprofileStudentsSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.unprofileStudent = action?.payload;
    },
    getUnprofileStudentsFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action?.payload;
    },

    // get ban teacher
    getBanStudentsStart: (state) => {
      state.isLoading = true;
    },
    getBanStudentsSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.banStudent = action?.payload;
    },
    getBanStudentsFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action?.payload;
    },

    // ban student
    bannedStudentStart: (state) => {
      state.isLoading = true;
    },
    bannedStudentSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.student = action?.payload;
    },
    bannedStudentFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action?.payload;
    },

    // delete student
    activeStudentStart: (state) => {
      state.isLoading = true;
    },
    activeStudentSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.student = action?.payload;
    },
    activeStudentFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action?.payload;
    },

    // delete student
    deleteStudentStart: (state) => {
      state.isLoading = true;
    },
    deleteStudentSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.student = action?.payload;
    },
    deleteStudentFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action?.payload;
    },
  },
});

export const {
  getStudentsStart,
  getStudentsSuccess,
  getStudentsFailure,
  bannedStudentStart,
  bannedStudentSuccess,
  bannedStudentFailure,
  activeStudentStart,
  activeStudentSuccess,
  activeStudentFailure,
  deleteStudentStart,
  deleteStudentSuccess,
  deleteStudentFailure,
  getRecentStudentsStart,
  getRecentStudentsSuccess,
  getRecentStudentsFailure,
  getUnprofileStudentsStart,
  getUnprofileStudentsSuccess,
  getUnprofileStudentsFailure,
  getBanStudentsStart,
  getBanStudentsSuccess,
  getBanStudentsFailure,
} = student.actions;

export default student.reducer;
