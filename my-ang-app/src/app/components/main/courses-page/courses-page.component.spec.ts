import { CoursesPageComponent } from './courses-page.component';
import { CoursesListService } from './courses-list.service';
import { FilterCoursesByInputPipe } from './search-add/filter-courses-by-input.pipe';

describe('CoursesPageComponent', () => {
	let filterCoursesByInputPipe: FilterCoursesByInputPipe = new FilterCoursesByInputPipe()
	let coursesListService: CoursesListService = new CoursesListService(filterCoursesByInputPipe);
	let component: CoursesPageComponent = new CoursesPageComponent(coursesListService);

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
