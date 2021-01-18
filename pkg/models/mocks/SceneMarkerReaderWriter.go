// Code generated by mockery v0.0.0-dev. DO NOT EDIT.

package mocks

import (
	models "github.com/stashapp/stash/pkg/models"
	mock "github.com/stretchr/testify/mock"
)

// SceneMarkerReaderWriter is an autogenerated mock type for the SceneMarkerReaderWriter type
type SceneMarkerReaderWriter struct {
	mock.Mock
}

// CountByTagID provides a mock function with given fields: tagID
func (_m *SceneMarkerReaderWriter) CountByTagID(tagID int) (int, error) {
	ret := _m.Called(tagID)

	var r0 int
	if rf, ok := ret.Get(0).(func(int) int); ok {
		r0 = rf(tagID)
	} else {
		r0 = ret.Get(0).(int)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(tagID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Create provides a mock function with given fields: newSceneMarker
func (_m *SceneMarkerReaderWriter) Create(newSceneMarker models.SceneMarker) (*models.SceneMarker, error) {
	ret := _m.Called(newSceneMarker)

	var r0 *models.SceneMarker
	if rf, ok := ret.Get(0).(func(models.SceneMarker) *models.SceneMarker); ok {
		r0 = rf(newSceneMarker)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*models.SceneMarker)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(models.SceneMarker) error); ok {
		r1 = rf(newSceneMarker)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Destroy provides a mock function with given fields: id
func (_m *SceneMarkerReaderWriter) Destroy(id int) error {
	ret := _m.Called(id)

	var r0 error
	if rf, ok := ret.Get(0).(func(int) error); ok {
		r0 = rf(id)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// Find provides a mock function with given fields: id
func (_m *SceneMarkerReaderWriter) Find(id int) (*models.SceneMarker, error) {
	ret := _m.Called(id)

	var r0 *models.SceneMarker
	if rf, ok := ret.Get(0).(func(int) *models.SceneMarker); ok {
		r0 = rf(id)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*models.SceneMarker)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(id)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FindBySceneID provides a mock function with given fields: sceneID
func (_m *SceneMarkerReaderWriter) FindBySceneID(sceneID int) ([]*models.SceneMarker, error) {
	ret := _m.Called(sceneID)

	var r0 []*models.SceneMarker
	if rf, ok := ret.Get(0).(func(int) []*models.SceneMarker); ok {
		r0 = rf(sceneID)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.SceneMarker)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(sceneID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FindMany provides a mock function with given fields: ids
func (_m *SceneMarkerReaderWriter) FindMany(ids []int) ([]*models.SceneMarker, error) {
	ret := _m.Called(ids)

	var r0 []*models.SceneMarker
	if rf, ok := ret.Get(0).(func([]int) []*models.SceneMarker); ok {
		r0 = rf(ids)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.SceneMarker)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func([]int) error); ok {
		r1 = rf(ids)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetMarkerStrings provides a mock function with given fields: q, sort
func (_m *SceneMarkerReaderWriter) GetMarkerStrings(q *string, sort *string) ([]*models.MarkerStringsResultType, error) {
	ret := _m.Called(q, sort)

	var r0 []*models.MarkerStringsResultType
	if rf, ok := ret.Get(0).(func(*string, *string) []*models.MarkerStringsResultType); ok {
		r0 = rf(q, sort)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.MarkerStringsResultType)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(*string, *string) error); ok {
		r1 = rf(q, sort)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetTagIDs provides a mock function with given fields: imageID
func (_m *SceneMarkerReaderWriter) GetTagIDs(imageID int) ([]int, error) {
	ret := _m.Called(imageID)

	var r0 []int
	if rf, ok := ret.Get(0).(func(int) []int); ok {
		r0 = rf(imageID)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]int)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(imageID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Query provides a mock function with given fields: sceneMarkerFilter, findFilter
func (_m *SceneMarkerReaderWriter) Query(sceneMarkerFilter *models.SceneMarkerFilterType, findFilter *models.FindFilterType) ([]*models.SceneMarker, int, error) {
	ret := _m.Called(sceneMarkerFilter, findFilter)

	var r0 []*models.SceneMarker
	if rf, ok := ret.Get(0).(func(*models.SceneMarkerFilterType, *models.FindFilterType) []*models.SceneMarker); ok {
		r0 = rf(sceneMarkerFilter, findFilter)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.SceneMarker)
		}
	}

	var r1 int
	if rf, ok := ret.Get(1).(func(*models.SceneMarkerFilterType, *models.FindFilterType) int); ok {
		r1 = rf(sceneMarkerFilter, findFilter)
	} else {
		r1 = ret.Get(1).(int)
	}

	var r2 error
	if rf, ok := ret.Get(2).(func(*models.SceneMarkerFilterType, *models.FindFilterType) error); ok {
		r2 = rf(sceneMarkerFilter, findFilter)
	} else {
		r2 = ret.Error(2)
	}

	return r0, r1, r2
}

// Update provides a mock function with given fields: updatedSceneMarker
func (_m *SceneMarkerReaderWriter) Update(updatedSceneMarker models.SceneMarker) (*models.SceneMarker, error) {
	ret := _m.Called(updatedSceneMarker)

	var r0 *models.SceneMarker
	if rf, ok := ret.Get(0).(func(models.SceneMarker) *models.SceneMarker); ok {
		r0 = rf(updatedSceneMarker)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*models.SceneMarker)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(models.SceneMarker) error); ok {
		r1 = rf(updatedSceneMarker)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// UpdateTags provides a mock function with given fields: markerID, tagIDs
func (_m *SceneMarkerReaderWriter) UpdateTags(markerID int, tagIDs []int) error {
	ret := _m.Called(markerID, tagIDs)

	var r0 error
	if rf, ok := ret.Get(0).(func(int, []int) error); ok {
		r0 = rf(markerID, tagIDs)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// Wall provides a mock function with given fields: q
func (_m *SceneMarkerReaderWriter) Wall(q *string) ([]*models.SceneMarker, error) {
	ret := _m.Called(q)

	var r0 []*models.SceneMarker
	if rf, ok := ret.Get(0).(func(*string) []*models.SceneMarker); ok {
		r0 = rf(q)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.SceneMarker)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(*string) error); ok {
		r1 = rf(q)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}
