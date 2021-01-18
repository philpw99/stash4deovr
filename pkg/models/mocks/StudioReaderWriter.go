// Code generated by mockery v0.0.0-dev. DO NOT EDIT.

package mocks

import (
	models "github.com/stashapp/stash/pkg/models"
	mock "github.com/stretchr/testify/mock"
)

// StudioReaderWriter is an autogenerated mock type for the StudioReaderWriter type
type StudioReaderWriter struct {
	mock.Mock
}

// All provides a mock function with given fields:
func (_m *StudioReaderWriter) All() ([]*models.Studio, error) {
	ret := _m.Called()

	var r0 []*models.Studio
	if rf, ok := ret.Get(0).(func() []*models.Studio); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.Studio)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func() error); ok {
		r1 = rf()
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AllSlim provides a mock function with given fields:
func (_m *StudioReaderWriter) AllSlim() ([]*models.Studio, error) {
	ret := _m.Called()

	var r0 []*models.Studio
	if rf, ok := ret.Get(0).(func() []*models.Studio); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.Studio)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func() error); ok {
		r1 = rf()
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Count provides a mock function with given fields:
func (_m *StudioReaderWriter) Count() (int, error) {
	ret := _m.Called()

	var r0 int
	if rf, ok := ret.Get(0).(func() int); ok {
		r0 = rf()
	} else {
		r0 = ret.Get(0).(int)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func() error); ok {
		r1 = rf()
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Create provides a mock function with given fields: newStudio
func (_m *StudioReaderWriter) Create(newStudio models.Studio) (*models.Studio, error) {
	ret := _m.Called(newStudio)

	var r0 *models.Studio
	if rf, ok := ret.Get(0).(func(models.Studio) *models.Studio); ok {
		r0 = rf(newStudio)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*models.Studio)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(models.Studio) error); ok {
		r1 = rf(newStudio)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Destroy provides a mock function with given fields: id
func (_m *StudioReaderWriter) Destroy(id int) error {
	ret := _m.Called(id)

	var r0 error
	if rf, ok := ret.Get(0).(func(int) error); ok {
		r0 = rf(id)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// DestroyImage provides a mock function with given fields: studioID
func (_m *StudioReaderWriter) DestroyImage(studioID int) error {
	ret := _m.Called(studioID)

	var r0 error
	if rf, ok := ret.Get(0).(func(int) error); ok {
		r0 = rf(studioID)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// Find provides a mock function with given fields: id
func (_m *StudioReaderWriter) Find(id int) (*models.Studio, error) {
	ret := _m.Called(id)

	var r0 *models.Studio
	if rf, ok := ret.Get(0).(func(int) *models.Studio); ok {
		r0 = rf(id)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*models.Studio)
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

// FindByName provides a mock function with given fields: name, nocase
func (_m *StudioReaderWriter) FindByName(name string, nocase bool) (*models.Studio, error) {
	ret := _m.Called(name, nocase)

	var r0 *models.Studio
	if rf, ok := ret.Get(0).(func(string, bool) *models.Studio); ok {
		r0 = rf(name, nocase)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*models.Studio)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(string, bool) error); ok {
		r1 = rf(name, nocase)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FindChildren provides a mock function with given fields: id
func (_m *StudioReaderWriter) FindChildren(id int) ([]*models.Studio, error) {
	ret := _m.Called(id)

	var r0 []*models.Studio
	if rf, ok := ret.Get(0).(func(int) []*models.Studio); ok {
		r0 = rf(id)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.Studio)
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

// FindMany provides a mock function with given fields: ids
func (_m *StudioReaderWriter) FindMany(ids []int) ([]*models.Studio, error) {
	ret := _m.Called(ids)

	var r0 []*models.Studio
	if rf, ok := ret.Get(0).(func([]int) []*models.Studio); ok {
		r0 = rf(ids)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.Studio)
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

// GetImage provides a mock function with given fields: studioID
func (_m *StudioReaderWriter) GetImage(studioID int) ([]byte, error) {
	ret := _m.Called(studioID)

	var r0 []byte
	if rf, ok := ret.Get(0).(func(int) []byte); ok {
		r0 = rf(studioID)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]byte)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(studioID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetStashIDs provides a mock function with given fields: studioID
func (_m *StudioReaderWriter) GetStashIDs(studioID int) ([]*models.StashID, error) {
	ret := _m.Called(studioID)

	var r0 []*models.StashID
	if rf, ok := ret.Get(0).(func(int) []*models.StashID); ok {
		r0 = rf(studioID)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.StashID)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(studioID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// HasImage provides a mock function with given fields: studioID
func (_m *StudioReaderWriter) HasImage(studioID int) (bool, error) {
	ret := _m.Called(studioID)

	var r0 bool
	if rf, ok := ret.Get(0).(func(int) bool); ok {
		r0 = rf(studioID)
	} else {
		r0 = ret.Get(0).(bool)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(studioID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Query provides a mock function with given fields: studioFilter, findFilter
func (_m *StudioReaderWriter) Query(studioFilter *models.StudioFilterType, findFilter *models.FindFilterType) ([]*models.Studio, int, error) {
	ret := _m.Called(studioFilter, findFilter)

	var r0 []*models.Studio
	if rf, ok := ret.Get(0).(func(*models.StudioFilterType, *models.FindFilterType) []*models.Studio); ok {
		r0 = rf(studioFilter, findFilter)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*models.Studio)
		}
	}

	var r1 int
	if rf, ok := ret.Get(1).(func(*models.StudioFilterType, *models.FindFilterType) int); ok {
		r1 = rf(studioFilter, findFilter)
	} else {
		r1 = ret.Get(1).(int)
	}

	var r2 error
	if rf, ok := ret.Get(2).(func(*models.StudioFilterType, *models.FindFilterType) error); ok {
		r2 = rf(studioFilter, findFilter)
	} else {
		r2 = ret.Error(2)
	}

	return r0, r1, r2
}

// Update provides a mock function with given fields: updatedStudio
func (_m *StudioReaderWriter) Update(updatedStudio models.StudioPartial) (*models.Studio, error) {
	ret := _m.Called(updatedStudio)

	var r0 *models.Studio
	if rf, ok := ret.Get(0).(func(models.StudioPartial) *models.Studio); ok {
		r0 = rf(updatedStudio)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*models.Studio)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(models.StudioPartial) error); ok {
		r1 = rf(updatedStudio)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// UpdateFull provides a mock function with given fields: updatedStudio
func (_m *StudioReaderWriter) UpdateFull(updatedStudio models.Studio) (*models.Studio, error) {
	ret := _m.Called(updatedStudio)

	var r0 *models.Studio
	if rf, ok := ret.Get(0).(func(models.Studio) *models.Studio); ok {
		r0 = rf(updatedStudio)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*models.Studio)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(models.Studio) error); ok {
		r1 = rf(updatedStudio)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// UpdateImage provides a mock function with given fields: studioID, image
func (_m *StudioReaderWriter) UpdateImage(studioID int, image []byte) error {
	ret := _m.Called(studioID, image)

	var r0 error
	if rf, ok := ret.Get(0).(func(int, []byte) error); ok {
		r0 = rf(studioID, image)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// UpdateStashIDs provides a mock function with given fields: studioID, stashIDs
func (_m *StudioReaderWriter) UpdateStashIDs(studioID int, stashIDs []models.StashID) error {
	ret := _m.Called(studioID, stashIDs)

	var r0 error
	if rf, ok := ret.Get(0).(func(int, []models.StashID) error); ok {
		r0 = rf(studioID, stashIDs)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}
