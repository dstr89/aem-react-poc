package hr.strmecki.demo.models;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CtaModel
{

    @ValueMapValue
    @Default(values = StringUtils.EMPTY)
    private String text;

    @ValueMapValue
    @Default(values = StringUtils.EMPTY)
    private String url;

    public String getText()
    {
        return text;
    }

    public String getUrl()
    {
        return url;
    }

}
