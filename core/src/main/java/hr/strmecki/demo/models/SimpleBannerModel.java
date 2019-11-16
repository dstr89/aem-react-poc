package hr.strmecki.demo.models;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class SimpleBannerModel
{

    @ValueMapValue
    @Default(values = StringUtils.EMPTY)
    private String title;

    @ValueMapValue(name = "text-color")
    @Default(values = "#FFFFFF")
    private String textColor;

    @ValueMapValue(name = "background-image")
    @Default(values = "https://placeimg.com/750/250/nature")
    private String backgroundImage;

    public String getTitle()
    {
        return title;
    }

    public String getTextColor()
    {
        return textColor;
    }

    public String getBackgroundImage()
    {
        return backgroundImage;
    }

}
