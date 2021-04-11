import { SearchAddComponent } from './search-add.component';
import { CoursesListService } from '../courses-list.service';
import { FilterCoursesByInputPipe } from './filter-courses-by-input.pipe';

describe('SearchAddComponent', () => {
	let filterCoursesByInputPipe: FilterCoursesByInputPipe = new FilterCoursesByInputPipe();
	let coursesListService: CoursesListService = new CoursesListService(filterCoursesByInputPipe);
	let component: SearchAddComponent = new SearchAddComponent(coursesListService);
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
